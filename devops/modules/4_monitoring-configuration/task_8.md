# Task 8: Grafana Installation and Dashboard Creation

## Objective

In this task, you will install Grafana on your Kubernetes (K8s) cluster using a Helm chart and create a dashboard to visualize Prometheus metrics.

## Steps

1. **Install Grafana**

   - Follow the instructions to install Grafana using the Helm chart by Bitnami. Refer to the [Grafana documentation](https://grafana.com/docs/) for more details.
   - Ensure Grafana is available from the internet via an encrypted connection.

2. **Create Dashboard**

   - Add a new data source pointing to the existing Prometheus installation.
   - Create a dashboard with main K8s metrics visualized, such as CPU and memory utilization, nodes capacity, etc.

3. **Store Artifacts in Git**

   - Store the Helm chart and configuration files for Grafana deployment in a new git repository.

4. **Additional Tasks**
   - Document the Grafana setup, including the dashboard creation, in a README file.

## Submission

- Provide a PR with the Helm chart and configuration files for Grafana deployment in a new repository.
- Ensure that Grafana is installed and available from the internet via an encrypted connection.
- Provide a screenshot of the Grafana dashboard with main K8s metrics visualized.
- Provide a README file documenting the Grafana setup, including the dashboard creation.

## Evaluation Criteria (100 points for covering all criteria)

1. **Grafana Installation (40 points)**

   - Grafana is installed on the K8s cluster using the Helm chart by Bitnami.
   - Grafana is available from the internet via an encrypted connection.

2. **Dashboard Creation (30 points)**

   - A new data source pointing to the existing Prometheus installation is added.
   - A dashboard is created with main K8s metrics visualized, such as CPU and memory utilization, nodes capacity, etc.

3. **Repository Submission (10 points)**

   - A repository is created with the Helm chart and configuration files for Grafana deployment.

4. **Additional Tasks (20 points)**
   - **Documentation (10 points)**
     - The Grafana setup, including the dashboard creation, is documented in a README file.
   - **Security Configuration (10 points)**
     - Grafana is configured with proper authentication and security settings.
