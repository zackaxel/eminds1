import StripeButton from "./StripeButton";

<section className="py-20 px-6 bg-white text-center">
  <h2 className="text-3xl font-bold mb-4">Student Ticket Price</h2>
  <p className="text-xl mb-6">Attend live Nobel Prize physics talks for only:</p>
  <div className="inline-block bg-indigo-700 text-white px-10 py-6 rounded-2xl shadow-xl">
    <span className="text-4xl font-bold">$19.99</span>
    <p className="text-sm mt-2 opacity-90">per student ticket</p>
  </div>
  <StripeButton />
</section>
