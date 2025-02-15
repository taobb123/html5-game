import React from 'react';

function Terms() {
  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        
        <div className="space-y-8 text-gray-400">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using Street Racers, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. User Accounts</h2>
            <p className="mb-4">When creating an account, you agree to:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Not share your account credentials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Game Rules and Fair Play</h2>
            <p className="mb-4">Users must:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Play fairly and not use cheats or exploits</li>
              <li>Respect other players</li>
              <li>Not engage in disruptive behavior</li>
              <li>Report bugs and exploits to our team</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
            <p>All content, including games, graphics, and code, is the property of Street Racers and protected by copyright laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Termination</h2>
            <p>We reserve the right to terminate or suspend accounts that violate these terms or engage in inappropriate behavior.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Changes to Terms</h2>
            <p>We may modify these terms at any time. Continued use of the service after changes constitutes acceptance of new terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Contact</h2>
            <p>For questions about these terms, please contact us at terms@streetracers.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Terms;