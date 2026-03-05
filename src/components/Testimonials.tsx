const testimonials = [
  {
    name: "Norzana",
    location: "Sekinchan, Selangor",
    quote: "Saya dah cuba banyak tempat tapi tak berjaya memiliki kereta idaman sy. Alhamdulillah dgn Carlo sy berjaya memiliki kereta idaman sy.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Muniandy",
    location: "Klang, Selangor",
    quote: "Awesome car buying service!! Thank u Akmal for make my dreams come true. Definitely will recommend you to others.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Kalaiselvi",
    location: "Cheras, Kuala Lumpur",
    quote: "Easy dealing with you, kekak! Definitely will recommend you to others.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-carlo">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
          Happy Customers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-carlo-orange">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} from ${testimonial.location} - Carlo customer testimonial`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-semibold text-carlo-orange text-lg mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {testimonial.location}
                </p>
                <p className="text-foreground text-sm leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;