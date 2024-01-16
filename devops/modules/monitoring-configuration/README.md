# Module 4: Monitoring with Prometheus and Grafana

## Preface

In this module you need to configure cluster's metrics collection with Prometheus, visualize it with Grafana, and configure and test some alerts with Alert Manager.

## Task 1. Install and configure Prometheus.

Monitoring is an essential part of any production setup. Prometheus is an open-source system which may collect metrics from applications, hosted a K8s cluster as well as from the cluster itself. See Prometheus documentation (https://prometheus.io/docs/introduction/overview/) for more details.

In this task you need to install Prometheus to your cluster using Helm chart by Bitnami. Make sure that Prometheus is able to collect some essential metrics, like nodes CPU and memory usage. You may check collected metrics in Prometheus web interface, which might be accessed via kubectl proxy or port-forward functions.

**This task is considered as done if all the conditions below are met:**

- you have Prometheus installed on your cluster;
- Prometheus is not exposed outside (i.e. you can't access it directly from the internet);
- Prometheus is collecting cluster-specific metrics.

## Task 2. Install and configure Grafana.

While Prometheus shines in metrics collection, it's visualisation abilities are pretty limited. For that reason it's commonly being used with Grafana, which provides a lot of options for data representation. See Grafana official documentation (https://grafana.com/docs/) for more detail. A lot of examples of Grafana data visualisation could be find at official Grafana demo site (https://play.grafana.org/).

In this task you need to install Grafana using Helm chart by Bitnami. When done with the installation, Grafana should be exposed outside your cluster. A new data data source pointing to the existing Prometheus installation should be added. To visualise Prometheus state, create a new dashboard which should include data for some important K8s metrics, like CPU and memory utilization, nodes capacity, etc. Feel free to add some other metrics of your choice.

**This task is considered as done if all the conditions below are met:**

- you have Grafana installed on your cluster;
- Grafana is available from the internet via an encrypted connection;
- you have a dashboard with main K8s metrics visualised (see above for the examples of what is supposed to be included).

## Task 3. Alerting configuration and verification.

It's easy to miss some important change in your service when relying only on visual observation of related metrics. To avoid such situations, it's crucial to have good alerting service. In this task you need to configure Alertmanager (https://prometheus.io/docs/alerting/latest/alertmanager/) - a Prometheus' component, which might be used to send alerts via various channels.

You task is to configure multiple alerts for such events as:

- high CPU utilization on any node of your cluster;
- lack of CPU cores capacity on any node of your cluster;
- no running CoreDNS pods (if applicable to your cluster).

Alertmanager should be configured to deliver alerts to your email address.

When finish with Alertmanager configuration, try to simulate any failure from the list above and check whether you receive alerts or not.

**This task is considered as done if all the conditions below are met:**

- you have configured alerts for the events from the list above;
- alerts are being delivered to your email address.
