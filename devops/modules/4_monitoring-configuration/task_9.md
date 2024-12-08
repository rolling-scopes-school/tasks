# Task 9: Alertmanager Configuration and Verification

## Objective

In this task, you will configure Grafana Alerting to send alerts for specific events in your Kubernetes (K8s) cluster and verify that the alerts are received.

## Steps

1. **Configure SMTP for Grafana**
   - Configure SMTP server
     - For local setup you can consider any SMTP server
     - To send emails in AWS consider using Amazon SES (Simple Email Service)
   - Configure Grafana SMTP settings
     - Local setup will need only host:port and probably skipVerify to bypass tls verification
     - AWS SES will need host:port, authentication details and "from address" which must be verified in SES
2. **Configure Contact points**
   - Add your email as a contact point. (this email should be also verified if you are using AWS SES)
3. **Configure Alert Rules**
   - Configure alerts for the following events:
     - High CPU utilization on any node of the cluster.
     - Lack of RAM capacity on any node of the cluster.
   - Ensure alerts are delivered to your email address.
4. **Verify Alerts**
   - Simulate CPU and memory stress on a Kubernetes node using tools like `stress` or `sysbench`.
5. **Additional Tasks**
   - Document the setup and alert configuration in a README file.

## Submission

- Provide a PR with the changes in configuration files.
- Include into PR (description or in changes) screenshots of:
  - Contact Points.
  - Alert Rules in normal and firing state.
  - Alert Rules configuration.
  - Received emails.
- Provide a README file documenting the setup and alert configuration.
  **Note:** Ensure that all personal data, such as email addresses and SMTP credentials, are hidden in screenshots, code and documentation.

## Evaluation Criteria (100 points for covering all criteria)

1. **Contact Points created (10 points)**
2. **Alert Rules created (40 points)**
   - Alert Rules are configured to send alerts for the following events:
     - High CPU utilization on any node of the cluster.
     - Lack of RAM capacity on any node of the cluster.
   - Alerts are configured to be delivered to your email address.
3. **Alert Rules are working as expected (20 points)**
   - Alert Rules are firing when the specified events occur.
4. **Email is received (10 points)**
5. **Additional Tasks (20 points)**
   - **Documentation (10 points)**
     - The Alertmanager setup and alert configuration are documented in a README file.
   - **Configuration is done completely in code (10 points)**
     - Alert Rules, Contact Points, and SMTP settings are configured using YAML files or other code-based methods.

## Additional Resources

- [Grafana Alerting Documentation](https://grafana.com/docs/grafana/latest/alerting/)
- AWS restricts outgoing connections for sending emails: [AWS Documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html#port-25-throttle)
- Domain for AWS SES can be anything, it won't require verification to send emails to verified email addresses.
- Simple SMTP server deployment [docker-postfix](https://github.com/bokysan/docker-postfix)
- [Tool to impose load](https://linux.die.net/man/1/stress)
- [Helm Chart for Grafana](https://github.com/bitnami/charts/tree/main/bitnami/grafana)
- [Use configuration files to provision alerting resources](https://grafana.com/docs/grafana/latest/alerting/set-up/provision-alerting-resources/file-provisioning/)
