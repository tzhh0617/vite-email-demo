<template>
  <div class="rich-editor" ref="richEditorRef">
    <div ref="toolbarContainerRef" class="toolbar-container"></div>
    <div ref="editorContainerRef" :style="`height: ${editorHeight}px`"></div>
  </div>
</template>

<script lang="ts" setup>
import {
  createEditor,
  createToolbar,
  i18nChangeLanguage,
} from "@wangeditor-next/editor";
import "@wangeditor-next/editor/dist/css/style.css";
import { useFormItem } from "element-plus";
import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
  shallowRef,
  watch,
} from "vue";

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    editorHeight?: number;
    maxLength?: number;
    enabled?: boolean;
    enableImage?: boolean;
    enableAttachment?: boolean;
  }>(),
  {
    editorHeight: 500,
    enabled: true,
    enableImage: false,
    enableAttachment: false,
  }
);

const emit = defineEmits(["update:modelValue"]);

const richEditorRef = shallowRef<any>(null);
const editorRef = shallowRef<any>(null);
const toolbarRef = shallowRef<any>(null);
const editorContainerRef = shallowRef<any>(null);
const toolbarContainerRef = shallowRef<any>(null);

const content: any = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});

const { formItem } = useFormItem();

watch(
  () => props.modelValue,
  (val) => {
    updateHtml(val || "");
    formItem?.validate?.("change").catch(() => {});
  }
);

function insertContent(val: string) {
  const valContent = "${" + val + "}";
  editorRef.value.focus();
  editorRef.value.insertText(valContent);
  editorRef.value.focus();
  editorRef.value.move(valContent.length);
  // content.value = editorRef.value.getText();
}

async function updateHtml(val: string) {
  const editor = editorRef.value;
  if (editor) {
    const isEmpty = editor.isEmpty();
    if (!val && isEmpty) {
      return;
    }
    const html = editor.getHtml();
    if (val !== html) {
      editor.setHtml(val);
    }
  }
}


const editorConfig: any = {
  placeholder: '请输入内容...',
  maxLength: props.maxLength,
  readOnly: !props.enabled,
  onChange: (editor: any) => {
    if (editor.isEmpty()) {
      content.value = "";
    } else {
      const html = editor.getHtml();
      content.value = html;
    }
  },
  onBlur: (editor: any) => {
    formItem?.validate?.("blur").catch(() => {});
  },
  MENU_CONF: {
    // uploadImage: {
    //   customUpload: async (file: any, insertFn: any) => {
    //     const data = await uploadImage(file);
    //     insertFn(data.url, data.alt, data.href);
    //   },
    // },
    // uploadAttachment: {
    //   customUpload: async (file: any, insertFn: any) => {
    //     const data = await uploadAttachment(file);
    //     insertFn(data.url, data.name, data.size);
    //   },
    // },
  },
  hoverbarKeys: {
    attachment: {
      menuKeys: ["editAttachment", "downloadAttachment", "deleteAttachment"],
    },
  },
};

function createToolbarConfig() {
  const imageKeys = props.enableImage ? ["uploadImage"] : [];
  const attachmentKeys = props.enableAttachment ? ["uploadAttachment"] : [];

  return {
    toolbarKeys: [
      "blockquote",
      "header1",
      "header2",
      "header3",
      "|",
      "bold",
      "underline",
      "italic",
      "through",
      "color",
      "bgColor",
      "clearStyle",
      "lineHeight",
      "|",
      "bulletedList",
      "numberedList",
      "todo",
      "justifyLeft",
      "justifyRight",
      "justifyCenter",
      "|",
      "insertLink",
      ...imageKeys,
      ...attachmentKeys,
      "insertTable",
      "|",
      "undo",
      "redo",
      "fullScreen",
    ],
  };
}

onMounted(() => {
  i18nChangeLanguage("en");
  mountEditor();
});

function mountEditor() {
  editorRef.value = createEditor({
    selector: editorContainerRef.value,
    config: editorConfig,
    html: content.value,
    mode: "simple",
  });

  toolbarRef.value = createToolbar({
    editor: editorRef.value,
    selector: toolbarContainerRef.value,
    config: createToolbarConfig(),
    mode: "simple",
  });

}

onBeforeUnmount(() => {
  editorRef.value?.destroy();
  toolbarRef.value?.destroy();
});
defineExpose({
  insertContent,
});
</script>

<style lang="scss" scoped>
.rich-editor {
  width: 100%;
  border: 1px solid var(--el-border-color);
  border-radius: var(--el-input-border-radius, var(--el-border-radius-base));
  background-color: var(--el-input-bg-color, var(--el-fill-color-blank));
  line-height: 20px;
  --w-e-textarea-slight-color: var(--el-text-color-placeholder);
  --w-e-textarea-bg-color: transparent;
}

.toolbar-container {
  border-bottom: 1px solid var(--el-border-color);
}

.w-e-full-screen-container {
  z-index: 9999;
}

// ::v-deep(.w-e-bar) {
//   background-color: transparent;
// }
</style>
