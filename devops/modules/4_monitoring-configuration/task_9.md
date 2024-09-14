# Task 9: Alertmanager Configuration and Verification

## Objective

In this task, you will configure Alertmanager to send alerts for specific events in your Kubernetes (K8s) cluster and verify that the alerts are received.

## Steps

1. **Configure Alertmanager**

   - Follow the instructions to configure Alertmanager. Refer to the [Alertmanager documentation](https://prometheus.io/docs/alerting/latest/alertmanager/) for more details.
   - Configure alerts for the following events:
     - High CPU utilization on any node of the cluster.
     - Lack of CPU cores capacity on any node of the cluster.
   - Ensure alerts are delivered to your email address.

2. **Verify Alerts**

   - Simulate any failure from the list above and verify that alerts are received.

3. **Store Artifacts in Git**

   - Store the configuration files for Alertmanager in a new git repository.

4. **Additional Tasks**
   - Document the Alertmanager setup and alert configuration in a README file.

## Submission

- Provide a PR with the configuration files for Alertmanager in a new repository.
- Ensure that alerts are configured and delivered to your email address.
- Provide evidence of received alerts (e.g., screenshots of email notifications).
- Provide a PR with the GHA pipeline code for Alertmanager deployment.
- Provide a README file documenting the Alertmanager setup and alert configuration.

## Evaluation Criteria (100 points for covering all criteria)

1. **Alertmanager Configuration (60 points)**

   - Alertmanager is configured to send alerts for the following events:
     - High CPU utilization on any node of the cluster.
     - Lack of CPU cores capacity on any node of the cluster.
   - Alerts are configured to be delivered to your email address.

2. **Alert Verification (10 points)**

   - Simulate any failure from the list above and verify that alerts are received.

3. **Repository Submission (10 points)**

   - A repository is created with the configuration files for Alertmanager.

4. **Additional Tasks (20 points)**
   - **Documentation (10 points)**
     - The Alertmanager setup and alert configuration are documented in a README file.
   - **Additional Alerting Channels (10 points)**
     - Configure additional alerting channels (e.g., Slack, PagerDuty) for Alertmanager.
