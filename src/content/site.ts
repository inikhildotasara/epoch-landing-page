export type SiteBrand = "epoch" | "brainiac";

export const CONTACT_EMAIL = "response.epoch@gmail.com";
export const LINKEDIN_HREF = "https://www.linkedin.com/company/144851145/";
export const CCBEE_HOW_IT_WORKS_HREF = "https://youtu.be/c3Z70eTTIaA";

export type BrandLinks = {
  phoneDisplay: string;
  phoneDigits: string;
  callHref: string;
  mailHref: string;
  whatsappHref: string;
  genieAppHref: string;
  genieAppLabel: string;
  facebookHref: string;
  youtubeHref: string;
  linkedinHref: string;
};

export const siteBrands: Record<SiteBrand, BrandLinks> = {
  epoch: {
    phoneDisplay: "+91 98077 14979",
    phoneDigits: "9807714979",
    callHref: "tel:+919807714979",
    mailHref: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Enquiry from Epoch website")}`,
    whatsappHref: "https://wa.me/919807714979",
    genieAppHref: "https://www.epocholympiad.co.in/epoch/",
    genieAppLabel: "Open Genie App",
    facebookHref: "https://www.facebook.com/epochindia",
    youtubeHref: "https://www.youtube.com/@epocholympiad",
    linkedinHref: LINKEDIN_HREF,
  },
  brainiac: {
    phoneDisplay: "+91 95592 17813",
    phoneDigits: "9559217813",
    callHref: "tel:+919559217813",
    mailHref: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Enquiry from Epoch website")}`,
    whatsappHref: "https://wa.me/919559217813",
    genieAppHref: "https://www.epocholympiad.co.in/brainiac/",
    genieAppLabel: "Brainiac Genie App",
    facebookHref: "https://www.facebook.com/brainiacglobal/",
    youtubeHref: "https://www.youtube.com/@BrainiacGlobal",
    linkedinHref: LINKEDIN_HREF,
  },
};

export function brandFromPathname(pathname: string): SiteBrand {
  return pathname.startsWith("/initiatives/brain-booster-olympiad")
    ? "brainiac"
    : "epoch";
}

export function brandForProgram(id: string): SiteBrand {
  return id === "brain-booster" ? "brainiac" : "epoch";
}
