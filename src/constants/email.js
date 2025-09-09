
export const EMAIL_TEMPLATE = `
<!doctype html>
<html>

<head title="bizName">
  <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  <meta http-equiv="content-style-type" content="text/css" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title></title>
</head>

<body style="font-family:'pingfangsc-regular', 'Microsoft YaHei';">
  <table border="0" cellpadding="100" cellspacing="0" min-scale="1" width="100%" style="border-collapse: collapse;text-align: center;transform: none;">
    <tbody>
      <tr>
        <td>
          <table border="0" cellpadding="0" cellspacing="0" width="100%" align="center" style="border-collapse: collapse;text-align: left;">
            <tbody>
              <tr>
                <td style="text-align: center;"><img style="width: 120px;height:50px;" src="https://files-eu.butterglobe.com/logo/butter_logo3.png" alt="logo"></td>
              </tr>
              <tr>
                <td style="height: 50px;"></td>
              </tr>
            </tbody>
          </table>
          <table border="0" cellpadding="3" cellspacing="0" width="100%" style="border-collapse: collapse;text-align: left;">
            <tbody style="color: #0d0c0a;font-family:'pingfangsc-regular', 'Microsoft YaHei';">
              <tr>
                <td>Hi <b>\${assigner}</b>,</td>
              </tr>
              <tr>
                <td style="height: 20px;"></td>
              </tr>
              <tr>
                <td>Please be informed that there is a new task <b>\${taskName}</b>
                  <#if dueDate !="">which will be due at \${dueDate}</#if>
                  <#if dueDateTimeZone !=""><span style="color: #C2C7CC;"> | Your Time-zone: \${dueDateTimeZone}</span></#if>.
                </td>
              </tr>
            </tbody>
          </table>
          <table border="0" cellpadding="2" cellspacing="0" align="left" width="100%" style="border-collapse: collapse;max-width: 100%;text-align: left;transform: initial;">
            <tbody style="font-size: 14px;color: #0d0c0a;font-family:'pingfangsc-regular', 'Microsoft YaHei';">
              <td style="height:80px;font-size:18px;"><b>Task Info</b></td>
              <tr>
                <td style="font-size:12px;color:#C2C7CC;width:150px;">Order ID:</td>
                <td>\${orderId}</td>
              </tr>
              <tr>
                <td style="font-size:12px;color:#C2C7CC;width:150px;">Create Time:</td>
                <td>\${createTime}</td>
              </tr>
              <tr>
                <td style="font-size:12px;color:#C2C7CC;width:150px;">Task Name:</td>
                <td>\${taskName}</td>
              </tr>
              <#if dueDate !="">
                <tr>
                  <td style="font-size:12px;color:#C2C7CC;width:150px;">Due Date:</td>
                  <td>\${dueDate}<#if dueDateTimeZone !=""><span style="color: #C2C7CC;"> | Your Time-zone: \${dueDateTimeZone}</span></#if>
                  </td>
                </tr>
              </#if>
              <#if orderLocation !="">
                <tr>
                  <td style="font-size:12px;color:#C2C7CC;width:150px;">Location:</td>
                  <td>\${orderLocation}</td>
                </tr>
              </#if>
              <tr>
                <td style="font-size:12px;color:#C2C7CC;width:150px;">Client:</td>
                <td>\${client}</td>
              </tr>
              <tr>
                <td style="font-size:12px;color:#C2C7CC;width:150px;">Service Type:</td>
                <td>\${serviceType}</td>
              </tr>
              <tr>
                <td style="font-size:12px;color:#C2C7CC;width:150px;">Service Module:</td>
                <td>\${serviceModule}</td>
              </tr>
              <#if localService !="">
                <tr>
                  <td style="font-size:12px;color:#C2C7CC;width:150px;">Local Service:</td>
                  <td>\${localService}</td>
                </tr>
              </#if>
              <tr>
                <td style="font-size:12px;color:#C2C7CC;width:150px;">Task Status:</td>
                <td>\${taskStatus}</td>
              </tr>
            </tbody>
          </table>
          <table border="0" cellpadding="2" cellspacing="0" align="left" width="100%" style="border-collapse:collapse;max-width:100%;text-align:left;transform: initial;">
            <tbody style="font-size:14px;font-family:'pingfangsc-regular', 'Microsoft YaHei';color:#0d0c0a;">
              <td style="height: 80px;font-size: 18px;"><b>Order Info</b></td>
              <tr>
                <td style="font-size: 12px;color: #C2C7CC;width: 150px;">Order ID:</td>
                <td>\${orderId}</td>
              </tr>
              <#if payPeriodName !="">
                <tr>
                  <td style="font-size: 12px;color: #C2C7CC;width: 150px;">Payroll Cycle:</td>
                  <td>\${payPeriodName}</td>
                </tr>
              </#if>
              <#if entityName !="" &&isEntityVisible==true>
                <tr>
                  <td style="font-size: 12px;color: #C2C7CC;width: 150px;">Entity:</td>
                  <td>\${entityName}</td>
                </tr>
              </#if>
              <tr>
                <td style="font-size: 12px;color: #C2C7CC;width: 150px;">Order Submitter:</td>
                <td>\${orderSubmitter}</td>
              </tr>
              <tr>
                <td style="font-size: 12px;color: #C2C7CC;width: 150px;">Submit Time:</td>
                <td>\${submitTime}</td>
              </tr>
              <#if orderLocation !="">
                <tr>
                  <td style="font-size: 12px;color: #C2C7CC;width: 150px;">Location:</td>
                  <td>\${orderLocation}</td>
                </tr>
              </#if>
              <tr>
                <td style="font-size: 12px;color: #C2C7CC;width: 150px;">Service Type:</td>
                <td>\${serviceType}</td>
              </tr>
              <tr>
                <td style="font-size: 12px;color: #C2C7CC;width: 150px;">Service Module:</td>
                <td>\${serviceModule}</td>
              </tr>
              <tr>
                <td style="font-size: 12px;color: #C2C7CC;width: 150px;">Client:</td>
                <td>\${client}</td>
              </tr>
              <tr>
                <td style="font-size: 12px;color: #C2C7CC;width: 150px;">Client Contact:</td>
                <td>\${clientContact}</td>
              </tr>
              <tr>
                <td style="font-size: 12px;color: #C2C7CC;width: 150px;">BIPO Service Delivery:</td>
                <td>\${serviceDeliverer}</td>
              </tr>
              <#if localService !="">
                <tr>
                  <td style="font-size: 12px;color: #C2C7CC;width: 150px;">Local Service:</td>
                  <td>\${localService}</td>
                </tr>
                <tr>
                  <td style="font-size: 12px;color: #C2C7CC;width: 150px;">Local Service Contact:</td>
                  <td>\${localServiceContact}</td>
                </tr>
              </#if>
              <#if serviceRating !="">
                <tr>
                  <td style="font-size: 12px;color: #C2C7CC;width: 150px;">Service Rating:</td>
                  <td>\${serviceRating}</td>
                </tr>
              </#if>
              <tr>
                <td style="font-size: 12px;color: #C2C7CC;width: 150px;">Status:</td>
                <td>\${orderStatus}</td>
              </tr>
              <tr>
                <td style="height: 20px;"></td>
              </tr>
              <tr>
                <td style="height: 80px;">
                  <table border="0" cellpadding="0" cellspacing="0" style="width:120px;border-collapse: collapse;text-align: center;transform: initial;">
                    <tbody style="font-family:'pingfangsc-regular', 'Microsoft YaHei';">
                      <tr>
                        <td bgcolor="#727cf5" style="display: inline;cursor: pointer;padding: 12px 20px;text-align: center;"><a style="font-size: 14px;color: #FFFFFF;text-decoration: none;" href="https://\${domainUrl}/orders/my-orders/detail/\${orderId}?companyCode=\${companyCode}">View Order</a></td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style="height: 80px;">
                  <table border="0" cellpadding="0" cellspacing="0" style="width:120px;border-collapse: collapse;text-align: center;">
                    <tbody style="font-family:'pingfangsc-regular', 'Microsoft YaHei';">
                      <tr>
                        <td bgcolor="#727cf5" style="display: inline;cursor: pointer;padding: 12px 20px;text-align: center;"><a style="font-size: 14px;color: #FFFFFF;text-decoration: none;" href="https://\${domainUrl}/tasks?taskId=\${taskId}&companyCode=\${companyCode}">View Task</a></td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table border="0" cellpadding="2" cellspacing="0" align="left" width="100%" style="border-collapse:collapse;text-align:left;transform: initial;">
            <tbody style="font-size:14px;font-family:'pingfangsc-regular', 'Microsoft YaHei';color:#C2C7CC;">
              <tr>
                <td style="height: 30px;"></td>
              </tr>
              <tr>
                <td><img src="https://files-eu.butterglobe.com/logo/butter_logo2.png" alt="logo" /></td>
              </tr>
              <tr>
                <td style="color: #C2C7CC;">©BIPO (ASIA) PTE. LTD.</td>
              </tr>
              <tr>
                <td style="height: 100px;"></td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</body>

</html>
`;
// 用正则替换去除 if 语句并填充变量
export const EMAIL_TEMPLATE_FILLED = EMAIL_TEMPLATE
  .replace(/<[/]?#if[^>]*>/g, '')
  .replace(/\$\{assigner\}/g, '张三')
  .replace(/\$\{taskName\}/g, '测试任务')
  .replace(/\$\{dueDate\}/g, '2025-09-09')
  .replace(/\$\{dueDateTimeZone\}/g, 'Asia/Shanghai')
  .replace(/\$\{orderId\}/g, 'ORDER123456')
  .replace(/\$\{createTime\}/g, '2025-09-08 10:00')
  .replace(/\$\{orderLocation\}/g, '上海市浦东新区')
  .replace(/\$\{client\}/g, '阿里巴巴')
  .replace(/\$\{serviceType\}/g, '外包')
  .replace(/\$\{serviceModule\}/g, '人事服务')
  .replace(/\$\{localService\}/g, '本地服务')
  .replace(/\$\{taskStatus\}/g, '待处理')
  .replace(/\$\{payPeriodName\}/g, '2025年9月')
  .replace(/\$\{entityName\}/g, '上海分公司')
  .replace(/\$\{orderSubmitter\}/g, '李四')
  .replace(/\$\{submitTime\}/g, '2025-09-08 09:00')
  .replace(/\$\{clientContact\}/g, '王五')
  .replace(/\$\{serviceDeliverer\}/g, '赵六')
  .replace(/\$\{localServiceContact\}/g, '钱七')
  .replace(/\$\{serviceRating\}/g, '5星')
  .replace(/\$\{orderStatus\}/g, '已完成')
  .replace(/\$\{domainUrl\}/g, 'demo.com')
  .replace(/\$\{companyCode\}/g, 'COMPANY001')
  .replace(/\$\{taskId\}/g, 'TASK001');
