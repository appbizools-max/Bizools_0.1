/**
 * FormHandler.js - Elite Lead Capture Engine
 * Centralized AJAX submission logic for Bizools Software Solutions.
 * Uses Web3Forms for zero-backend email routing.
 */

const FormHandler = {
    // CONFIGURATION: Replace with your actual Web3Forms Access Key
    // Get one for free at: https://web3forms.com/
    ACCESS_KEY: "0ab93cd6-db7f-4ed0-a3fd-732a6c699b35",

    /**
     * Universal submit handler
     * @param {HTMLFormElement} form - The form element to submit
     * @param {HTMLElement} submitBtn - The button to show loading state on
     * @param {Function} onSuccess - Callback after successful submission
     */
    async submitForm(form, submitBtn, onSuccess) {
        const formData = new FormData(form);

        // Ensure the access key is present
        if (!formData.has("access_key")) {
            formData.append("access_key", this.ACCESS_KEY);
        }

        // Add metadata for tracking
        formData.append("subject", "New Lead from Bizools Website");
        formData.append("from_name", "Bizools Lead Bot");

        const originalBtnContent = submitBtn.innerHTML;
        const originalBtnBg = submitBtn.style.background;

        try {
            // Show Elite Loading State
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>SUBMITTING...';
            submitBtn.disabled = true;

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                // PUSH TO CRM (LocalStorage)
                try {
                    const bizLeads = JSON.parse(localStorage.getItem('biz_leads') || '[]');
                    const newLead = {
                        id: Date.now(),
                        name: formData.get('name'),
                        phone: formData.get('phone'),
                        source: 'Website',
                        status: 'New',
                        rescheduleDate: null,
                        service: formData.get('service'),
                        message: formData.get('message'),
                        timestamp: new Date().toISOString()
                    };
                    bizLeads.push(newLead);
                    localStorage.setItem('biz_leads', JSON.stringify(bizLeads));
                    console.log("Lead captured in CRM");
                } catch (e) {
                    console.error("Failed to save lead to CRM:", e);
                }

                // Elite Success Animation
                submitBtn.innerHTML = '<i class="bi bi-check2-all me-2"></i>REQUEST RECEIVED!';
                submitBtn.style.background = '#059669'; // Professional Emerald

                form.reset();

                if (onSuccess) {
                    setTimeout(() => onSuccess(result), 2000);
                }
            } else {
                throw new Error(result.message || "Submission failed");
            }
        } catch (error) {
            console.error("Form Submission Error:", error);
            submitBtn.innerHTML = '<i class="bi bi-exclamation-triangle me-2"></i> ERROR. TRY AGAIN.';
            submitBtn.style.background = '#dc2626'; // Red
            submitBtn.disabled = false;

            // Revert after 3 seconds
            setTimeout(() => {
                submitBtn.innerHTML = originalBtnContent;
                submitBtn.style.background = originalBtnBg;
            }, 3000);
        }
    }
};

window.BizoolsFormHandler = FormHandler;
