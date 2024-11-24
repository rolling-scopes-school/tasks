# Task 7: Prometheus Deployment on K8s

## Objective

In this task, you will install Prometheus on your Kubernetes (K8s) cluster using a Helm chart and configure it to collect essential cluster-specific metrics.

## Steps
1. **Install Prometheus**
   - Follow the instructions to install Prometheus using the Helm chart by Bitnami. Refer to the [Prometheus documentation](https://prometheus.io/docs/introduction/overview/) for more details.
2. **Install Exporters**
   - Install necessary exporters to collect metrics from Kubernetes components.
3. **Configure Prometheus**
   - Configure Prometheus to get metrics from Kubernetes components.
2. **Verify Metrics Collection**
   - Ensure Prometheus is collecting essential cluster-specific metrics, such as nodes' memory usage.
   - Check the collected metrics via Prometheus web interface.

## Submission
- Provide a PR with automation of a Prometheus deployment in Kubernetes.
- Provide an output of `kubectl get pods` with running Prometheus.
- Include a screenshot of any metrics (e.g. node disk space usage) shown in the Prometheus web UI.
- Provide a README file documenting the Prometheus deployment and configuration.

## Evaluation Criteria (100 points for covering all criteria)
1. **Prometheus Installation (20 points)**
   - Prometheus is installed and running on the K8s cluster.
2. **Deployment Automation (30 points)**
   - Automation of deployment is created.
3. **Web interface is available (10 points)**
   - Metrics can be checked via Prometheus web interface.
4. **Metrics Collection (35 points)**
   - Prometheus is collecting essential cluster-specific metrics, such as nodes' memory usage.
5. **Documentation is created (5 points)**
   - A README file is created or updated documenting the Prometheus deployment and configuration.

## References
- [Prometheus Documentation](https://prometheus.io/docs/introduction/overview/)
- [Helm Chart for Prometheus](https://github.com/bitnami/charts/tree/main/bitnami/prometheus)
- [Bitnami Prometheus Helm Chart README](https://github.com/bitnami/charts/blob/main/bitnami/prometheus/README.md)
- [Kube state metrics](https://github.com/kubernetes/kube-state-metrics)
- [Prometheus Node Exporter](https://github.com/prometheus/node_exporter)
