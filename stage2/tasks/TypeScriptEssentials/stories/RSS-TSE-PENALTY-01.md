# ⏱ Issue RSS-TSE-Penalty: 100% Deduction for Post-Deployment File Modification

## 📝 Description

This penalty policy is applied to any changes made to a deployed document after its submission deadline. The aim is to ensure the integrity of the deployment process and adherence to deadlines, emphasizing the importance of finalizing documents before deployment. A 100% deduction penalty will be enforced for any post-deadline modifications, underscoring the necessity of effective time management and the completion of document preparations within the set timeframe.

## 🔨 Implementation Details

1. **Adherence to Deployment Deadlines:**

   - Confirm that all documents are finalized and appropriately prepared before the deployment deadline.
   - Avoid any edits or alterations to the document once it has been deployed and the deadline has passed.

2. **Penalty for Post-Deadline Modifications:**

   - Any modifications to the deployed document after the deadline will incur a full penalty of 100%.
   - This strict policy is in place to uphold the integrity and discipline of the deployment process.

3. **Verifying Last Modified Date:**

   - The last modified date of the deployed document can be verified using the `document.lastModified` command in the browser console.
   - This command helps identify the date and time of the last modification, which is crucial for enforcing the penalty policy.

## ✅ Acceptance Criteria

- No changes are made to the deployed document after the submission deadline.
- The `document.lastModified` command is utilized to check the last modification date of the document.
- Full understanding and compliance with the penalty policy to maintain the integrity of the deployment process.

## 🌐 Useful Links and Resources

- [Using `document.lastModified` for Date Verification](https://developer.mozilla.org/en-US/docs/Web/API/Document/lastModified)
