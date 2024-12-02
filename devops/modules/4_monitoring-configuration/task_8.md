# Task 8: Grafana Installation and Dashboard Creation

## Objective

In this task, you will install Grafana on your Kubernetes (K8s) cluster using a Helm chart and create a dashboard to visualize Prometheus metrics.

## Steps

1. **Install Grafana**
   - Follow the instructions to install Grafana using the Helm chart by Bitnami. Refer to the [Grafana documentation](https://grafana.com/docs/) for more details.
2. **Configure Grafana**
   - Add a new data source pointing to the existing Prometheus installation.
3. **Create a Dashboard**
   - Create a dashboard with basic metrics visualized, such as CPU and memory utilization, storage usage, etc.
4. **Document the Setup**
   - Create a README file documenting the Grafana setup, including the dashboard creation.

## Submission

- Provide a PR with automation of a Grafana deployment in Kubernetes with IaC or CI/CD pipeline.
- Provide an output of `kubectl get pods` with running Grafana.
- Include a screenshot or configuration of the Prometheus data source configuration.
- Include a screenshot of the dashboard created.
- Include a JSON file of the dashboard layout.
- Provide a README file documenting the Grafana deployment and configuration.

## Evaluation Criteria (100 points for covering all criteria)

1. **Grafana Installation (30 points)**
   - Grafana is installed on the K8s cluster using the Helm chart by Bitnami.
   - A data source pointing to the existing Prometheus installation is added.
2. **Dashboard Creation (40 points)**
   - A dashboard is created with basic metrics visualized, such as CPU and memory utilization, storage usage, etc.
3. **Deployment Automation (10 points)**
   - Automation of deployment with IaC or CI/CD pipeline is created.
4. **Additional Tasks (20 points)**
   - Admin user password is created with a separate secret. (10 points)
   - A JSON file of the dashboard layout is provided. (5 points)
   - The Grafana setup, including the dashboard creation, is documented in a README file. (5 points)

## References

- [Grafana Documentation](https://grafana.com/docs/)
- [Helm Chart for Grafana](https://github.com/bitnami/charts/tree/main/bitnami/grafana)
- [Tool to impose load](https://linux.die.net/man/1/stress)
- [Understanding Machine CPU Usage](https://www.robustperception.io/understanding-machine-cpu-usage/)
