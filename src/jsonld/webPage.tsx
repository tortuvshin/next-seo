import React from 'react';
import { CreativeWork, Provider } from 'src/types';
import { setReviewedBy } from 'src/utils/schema/setReviewedBy';
import { JsonLd } from './jsonld';

export interface WebPageJsonLdProps {
  keyOverride?: string;
  id: string;
  description?: string;
  lastReviewed?: string;
  mainContentOfPage?: CreativeWork;
  primaryImageOfPage?: string;
  relatedLink?: string;
  inLanguage?: string;
  provider: Provider;
  reviewedBy?: {
    type?: string;
    name: string;
  };
}

function WebPageJsonLd({
  keyOverride,
  reviewedBy,
  provider,
  mainContentOfPage,
  ...rest
}: WebPageJsonLdProps) {
  const data = {
    ...rest,
    reviewedBy: setReviewedBy(reviewedBy),
  };
  return (
    <JsonLd
      keyOverride={keyOverride}
      {...data}
      type="WebPage"
      scriptKey="WebPage"
    />
  );
}

export default WebPageJsonLd;
