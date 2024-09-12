# Task 7: Prometheus Deployment on K8s

## Objective

In this task, you will install Prometheus on your Kubernetes (K8s) cluster using a Helm chart and configure it to collect essential cluster-specific metrics.

## Steps

1. **Install Prometheus**
   - Follow the instructions to install Prometheus using the Helm chart by Bitnami. Refer to the [Prometheus documentation](https://prometheus.io/docs/introduction/overview/) for more details.
   - Ensure Prometheus is not exposed outside (i.e., it cannot be accessed directly from the internet).

2. **Verify Metrics Collection**
   - Ensure Prometheus is collecting essential cluster-specific metrics, such as nodes' CPU and memory usage.
   - Check the collected metrics via Prometheus web interface using `kubectl proxy` or `port-forward`.

## Submission

- Provide a PR with the Helm chart and configuration files for Prometheus deployment in a new repository.
- Ensure that Prometheus is installed and collecting cluster-specific metrics.
- Provide a README file documenting the Prometheus setup, including the custom dashboard.

## Evaluation Criteria (100 points for covering all criteria)

1. **Prometheus Installation (50 points)**
   - Prometheus is installed on the K8s cluster using the Helm chart by Bitnami.
   - Prometheus is not exposed outside (i.e., it cannot be accessed directly from the internet).

2. **Metrics Collection (40 points)**
   - Prometheus is collecting essential cluster-specific metrics, such as nodes' CPU and memory usage.
   - Metrics can be checked via Prometheus web interface using `kubectl proxy` or `port-forward`.

3. **Repository Submission (10 points)**
   - A repository is created with the Helm chart and configuration files for Prometheus deployment.
