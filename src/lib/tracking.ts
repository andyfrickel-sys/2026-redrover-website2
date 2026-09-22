import { siteConfig } from "@/config";

type StandardTrackingFieldKey = string;
type RegisteredCustomFieldId = string;
type TrackingCustomField = { value?: unknown; label: string };
type TrackingFileField = { file?: File; label: string };
type TrackingImageDataField = { dataUrl?: string; label: string };

const postTrackingEvent = (
  trackingPayload: Record<string, unknown> & {
    formData: Record<StandardTrackingFieldKey, unknown>;
    formLabels: Record<StandardTrackingFieldKey, string>;
  },
  options: {
    customFields?: Record<RegisteredCustomFieldId, TrackingCustomField>;
    fileFields?: Record<RegisteredCustomFieldId, TrackingFileField>;
    imageDataFields?: Record<RegisteredCustomFieldId, TrackingImageDataField>;
  } = {},
) => {
  const { customFields = {}, fileFields = {}, imageDataFields = {} } = options;
  const eventPayload = {
    ...trackingPayload,
    formData: { ...trackingPayload.formData },
    formLabels: { ...trackingPayload.formLabels },
  };
  const body = new FormData();

  for (const [key, field] of Object.entries(customFields)) {
    if (field.value === undefined) continue;
    eventPayload.formData[key] = field.value;
    eventPayload.formLabels[key] = field.label;
  }

  for (const [key, field] of Object.entries(imageDataFields)) {
    const dataUrl = field.dataUrl;
    if (!dataUrl) continue;
    if (!dataUrl.startsWith("data:image/")) {
      throw new Error("Image data field must be a data:image/* base64 string");
    }
    eventPayload.formData[key] = dataUrl;
    eventPayload.formLabels[key] = field.label;
  }

  for (const [key, field] of Object.entries(fileFields)) {
    const file = field.file;
    if (!file) continue;
    if (file.size > 50 * 1024 * 1024) {
      throw new Error("File must be 50 MB or smaller");
    }
    eventPayload.formData[key] = {
      filename: file.name,
      size: file.size,
      type: file.type || "application/octet-stream",
    };
    eventPayload.formLabels[key] = field.label;
    body.append(key, file, file.name);
  }

  for (const key of Object.keys(eventPayload.formData)) {
    eventPayload.formLabels[key] ||= key;
  }

  body.append("event", JSON.stringify(eventPayload));

  fetch("https://backend.leadconnectorhq.com/external-tracking/events", {
    method: "POST",
    headers: {
      version: "2021-07-28",
    },
    body,
  }).catch(() => {}); // Fire-and-forget — don't block form UX
};

export type AuditFormData = {
  firstName: string;
  businessName: string;
  website?: string;
  businessCategory?: string;
  email: string;
  phone: string;
  serviceArea?: string;
  concerns?: string;
};

/**
 * Submits the free online presence audit form to the CRM. Core identity
 * fields (name, business name, email, phone, website) map to standard CRM
 * keys; category, service area, and concerns are sent as custom fields.
 */
export const submitAuditForm = (data: AuditFormData) => {
  const trackingPayload = {
    type: "external_form_submission",
    timestamp: Date.now(),
    formId: "free-online-presence-audit",
    formData: {
      first_name: data.firstName,
      organization: data.businessName,
      email: data.email,
      phone: data.phone,
      website: data.website ?? "",
    },
    formLabels: {
      first_name: "Name",
      organization: "Business Name",
      email: "Email",
      phone: "Phone",
      website: "Website",
    },
    customFields: {
      business_category: data.businessCategory
        ? { value: data.businessCategory, label: "Business Category" }
        : undefined,
      service_area: data.serviceArea
        ? { value: data.serviceArea, label: "Primary Service Area" }
        : undefined,
      biggest_concern: data.concerns
        ? { value: data.concerns, label: "Biggest Online Marketing Concern" }
        : undefined,
    },
    url: window.location.href,
    title: document.title,
    path: window.location.pathname,
    userAgent: navigator.userAgent,
    trackingId: siteConfig.trackingId,
    locationId: siteConfig.locationId,
    projectId: siteConfig.projectId,
    sessionId: crypto.randomUUID(),
    properties: {
      deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent)
        ? "mobile"
        : "desktop",
      source: "ai_studio",
      projectId: siteConfig.projectId,
      formName: "Free Online Presence Audit",
    },
  };

  postTrackingEvent(trackingPayload, {
    customFields: trackingPayload.customFields,
  });
};

export type OrderFormData = {
  firstName: string;
  businessName: string;
  email: string;
  phone: string;
  website?: string;
  plan: string;
  billingCycle: "monthly" | "annual";
  notes?: string;
};

/**
 * Submits a package order to the CRM. Core identity fields map to standard
 * CRM keys; selected plan, billing cycle, and notes are sent as custom fields.
 */
export const submitOrderForm = (data: OrderFormData) => {
  const trackingPayload = {
    type: "external_form_submission",
    timestamp: Date.now(),
    formId: "package-order",
    formData: {
      first_name: data.firstName,
      organization: data.businessName,
      email: data.email,
      phone: data.phone,
      website: data.website ?? "",
    },
    formLabels: {
      first_name: "Name",
      organization: "Business Name",
      email: "Email",
      phone: "Phone",
      website: "Website",
    },
    customFields: {
      "0Sdosb6gnvMo1tF5jH1p": data.plan
        ? { value: data.plan, label: "Selected Plan" }
        : undefined,
      F7eIVi65u1bYGLaQxdv6: {
        value: data.billingCycle === "annual" ? "Annual" : "Monthly",
        label: "Billing Cycle",
      },
      biggest_concern: data.notes
        ? { value: data.notes, label: "Order Notes" }
        : undefined,
    },
    url: window.location.href,
    title: document.title,
    path: window.location.pathname,
    userAgent: navigator.userAgent,
    trackingId: siteConfig.trackingId,
    locationId: siteConfig.locationId,
    projectId: siteConfig.projectId,
    sessionId: crypto.randomUUID(),
    properties: {
      deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent)
        ? "mobile"
        : "desktop",
      source: "ai_studio",
      projectId: siteConfig.projectId,
      formName: "Package Order",
    },
  };

  postTrackingEvent(trackingPayload, {
    customFields: trackingPayload.customFields,
  });
};

export type IndustryLeadData = {
  firstName: string;
  businessName: string;
  email: string;
  phone: string;
  website?: string;
  serviceArea?: string;
  industry: string;
  template: string;
  message?: string;
};

/**
 * Submits an industry-template "Let's Get Started" lead to the CRM. Core
 * identity fields map to standard CRM keys; industry, template, service area,
 * and message are sent as custom fields.
 */
export const submitIndustryLead = (data: IndustryLeadData) => {
  const trackingPayload = {
    type: "external_form_submission",
    timestamp: Date.now(),
    formId: "industry-template-lead",
    formData: {
      first_name: data.firstName,
      organization: data.businessName,
      email: data.email,
      phone: data.phone,
      website: data.website ?? "",
    },
    formLabels: {
      first_name: "Name",
      organization: "Business Name",
      email: "Email",
      phone: "Phone",
      website: "Website",
    },
    customFields: {
      industry: data.industry
        ? { value: data.industry, label: "Industry" }
        : undefined,
      selected_template: data.template
        ? { value: data.template, label: "Selected Template" }
        : undefined,
      service_area: data.serviceArea
        ? { value: data.serviceArea, label: "Primary Service Area" }
        : undefined,
      message: data.message
        ? { value: data.message, label: "Message" }
        : undefined,
    },
    url: window.location.href,
    title: document.title,
    path: window.location.pathname,
    userAgent: navigator.userAgent,
    trackingId: siteConfig.trackingId,
    locationId: siteConfig.locationId,
    projectId: siteConfig.projectId,
    sessionId: crypto.randomUUID(),
    properties: {
      deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent)
        ? "mobile"
        : "desktop",
      source: "ai_studio",
      projectId: siteConfig.projectId,
      formName: "Industry Template Lead",
    },
  };

  postTrackingEvent(trackingPayload, {
    customFields: trackingPayload.customFields,
  });
};
