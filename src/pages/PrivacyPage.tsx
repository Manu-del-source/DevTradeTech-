import React from 'react';
import { PageWrapper, FadeInSection } from '../components/PageWrapper';

export function PrivacyPage() {
  return (
    <PageWrapper>
      <div className="section-spacing pt-12">
        <FadeInSection>
          <div className="max-w-4xl mx-auto px-6 py-16 text-slate-200">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <p className="mb-4">
              We use collected information to improve our content,
              website performance, and customer support.
            </p>
          </div>
        </FadeInSection>
      </div>
    </PageWrapper>
  );
}
