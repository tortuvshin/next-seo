import React from 'react';
import { setProvider } from 'src/index';
import { CreativeWork, Provider } from 'src/types';
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
  return (
    <JsonLd
      keyOverride={keyOverride}
      {...rest}
      reviewedBy={{
        '@type': reviewedBy?.type || 'Organization',
        ...reviewedBy,
      }}
      provider={setProvider(provider)}
      type="WebPage"
      scriptKey="WebPage"
    />
  );
}

export default WebPageJsonLd;
