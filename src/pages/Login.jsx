import React from 'react';
import PageHero from '../components/ui/PageHero';

function Login() {
  return (
    <div>
      <PageHero eyebrow="Member access" title="Sign in to manage your plans" text="This area is ready for future authentication or client portal integration." image="/assets/img/logo-new.png" primaryAction={{ label: 'Back Home', to: '/' }} secondaryAction={{ label: 'Contact', to: '/contact' }} />
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-xl rounded-[2rem] border border-[#EAD8B1]/50 bg-[#FAF7F0] p-8">
          <h2 className="font-playfair text-3xl text-[#071A2B]">Portal access</h2>
          <p className="mt-4 text-sm leading-7 text-[#20252A]/80">The interface can be connected to a secure login flow for future client account management.</p>
        </div>
      </section>
    </div>
  );
}

export default Login;