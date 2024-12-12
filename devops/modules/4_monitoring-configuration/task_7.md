# Task 7: Prometheus Deployment on K8s

## Objective

In this task, you'll setup a set of tools to monitor you cluster and application. We'll do it by installing Prometheus and Grafana in your cluster using HELM charts. Main goal is to collect essential metrics from an our infrastructure and visualize them. 

## Steps

### Prometheus

1. **Install Prometheus**
   - Follow the instructions to install Prometheus using the Helm chart by Bitnami. Refer to the [Prometheus documentation](https://prometheus.io/docs/introduction/overview/) for more details.
2. **Install Exporters**
   - Install necessary exporters to collect metrics from Kubernetes components.
3. **Configure Prometheus**
   - Configure Prometheus to get metrics from Kubernetes components.
4. **Verify Metrics Collection**
   - Ensure Prometheus is collecting essential cluster-specific metrics, such as nodes' memory usage.
   - Check the collected metrics via Prometheus web interface.
### Grafana 
1. **Install Grafana**
   - Follow the instructions to install Grafana using the Helm chart by Bitnami. Refer to the [Grafana documentation](https://grafana.com/docs/) for more details.
2. **Configure Grafana**
   - Add a new data source pointing to the existing Prometheus installation.
3. **Create a Dashboard**
   - Create a dashboard with basic metrics visualized, such as CPU and memory utilization, storage usage, etc.

### Alertmanager

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

## Submission
- Provide a README file documenting the Monitoring tools deployment and configuration. **Note:** Ensure that all personal data, such as email addresses and SMTP credentials, are hidden in screenshots, code and documentation.

#### Prometheus
- Provide a PR with automation of a MOnitoring tools deployment in Kubernetes with IaC or CI/CD pipeline.
- Provide an output of `kubectl get all --all-namespaces` with running Prometheus and Grafana.
- Include a screenshot of any metrics (e.g. node disk space usage) shown in the Prometheus web UI.

#### Grafana
- Include a screenshot or configuration of the Prometheus data source configuration.
- Include a screenshot of the dashboard created.
- Include a JSON file of the dashboard layout.

#### Alertmanager
- Include into PR (description or in changes) screenshots of:
  - Contact Points.
  - Alert Rules in normal and firing state.
  - Alert Rules configuration.
  - Received emails.

## Evaluation Criteria (100 points for covering all criteria)

1. **Prometheus Installation (20 points)**
   - Prometheus and Grafana are installed and running on the K8s cluster.
2. **Deployment Automation (10 points)**
   - Automation of deployment with IaC or CI/CD pipeline is created.
3. **Grafana Installation (10 points)**
   - A Grafana data source pointing to the existing Prometheus installation is added.
4. **Dashboard Creation (10 points)**
   - A dashboard is created with basic metrics visualized, such as CPU and memory utilization, storage usage, etc.
5. **Additional Tasks (10 points)**
   - Admin user password is created with a separate secret. (10 points)
   - A JSON file of the dashboard layout is provided. (5 points)
6. **Alert Rules created (20 points)**
   - Alert Rules are configured to send alerts for the following events:
     - High CPU utilization on any node of the cluster.
     - Lack of RAM capacity on any node of the cluster.
   - Alerts are configured to be delivered to your email address.
7. **Additional Tasks (10 points)**
   - **Configuration is done completely in code (10 points)**
     - Alert Rules, Contact Points, and SMTP settings are configured using YAML files or other code-based methods.

## References

### Prometheus
- [Prometheus Documentation](https://prometheus.io/docs/introduction/overview/)
- [Helm Chart for Prometheus](https://github.com/bitnami/charts/tree/main/bitnami/prometheus)
- [Bitnami Prometheus Helm Chart README](https://github.com/bitnami/charts/blob/main/bitnami/prometheus/README.md)
- [Kube state metrics](https://github.com/kubernetes/kube-state-metrics)
- [Prometheus Node Exporter](https://github.com/prometheus/node_exporter)

### Grafana

- [Grafana Documentation](https://grafana.com/docs/)
- [Helm Chart for Grafana](https://github.com/bitnami/charts/tree/main/bitnami/grafana)
- [Tool to impose load](https://linux.die.net/man/1/stress)
- [Understanding Machine CPU Usage](https://www.robustperception.io/understanding-machine-cpu-usage/)

### Grafana AlertManager
- [Grafana Alerting Documentation](https://grafana.com/docs/grafana/latest/alerting/)
- AWS restricts outgoing connections for sending emails: [AWS Documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html#port-25-throttle)
- Domain for AWS SES can be anything, it won't require verification to send emails to verified email addresses.
- Simple SMTP server deployment [docker-postfix](https://github.com/bokysan/docker-postfix)
- [Tool to impose load](https://linux.die.net/man/1/stress)
- [Helm Chart for Grafana](https://github.com/bitnami/charts/tree/main/bitnami/grafana)
- [Use configuration files to provision alerting resources](https://grafana.com/docs/grafana/latest/alerting/set-up/provision-alerting-resources/file-provisioning/)