export type SiteBrand = "epoch" | "brainiac";

export type BrandLinks = {
  phoneDisplay: string;
  phoneDigits: string;
  callHref: string;
  whatsappHref: string;
  genieAppHref: string;
  genieAppLabel: string;
  facebookHref: string;
  youtubeHref: string;
};

export const siteBrands: Record<SiteBrand, BrandLinks> = {
  epoch: {
    phoneDisplay: "+91 98077 14979",
    phoneDigits: "9807714979",
    callHref: "tel:+919807714979",
    whatsappHref: "https://wa.me/919807714979",
    genieAppHref: "https://www.epocholympiad.co.in/epoch/",
    genieAppLabel: "Epoch Genie App",
    facebookHref: "https://www.facebook.com/epochindia",
    youtubeHref: "https://www.youtube.com/@epocholympiad",
  },
  brainiac: {
    phoneDisplay: "+91 95592 17813",
    phoneDigits: "9559217813",
    callHref: "tel:+919559217813",
    whatsappHref: "https://wa.me/919559217813",
    genieAppHref: "https://www.epocholympiad.co.in/brainiac/",
    genieAppLabel: "Brainiac Genie App",
    facebookHref: "https://www.facebook.com/brainiacglobal/",
    youtubeHref: "https://www.youtube.com/@BrainiacGlobal",
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
