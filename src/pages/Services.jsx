import React from "react";
import { useNavigate } from "react-router-dom";
import CardFront from "../components/skeletons/CardFront";
import Background from "../components/BAckground";

const StoryboardShowcase = () => {
  const navigate = useNavigate();
  const cards = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
      title: "Film Production",
      route: "/film-production"
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      title: "Branding",
      route: "/branding"
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
      title: "Art Curation",
      route: "/art-curation"
    }
  ];

  return (
    <Background>
      <div className="h-20"></div>

      <div className="container mx-auto px-4 py-12">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            The storyboard reveals the breadth of our craft.
          </h1>
          <div className="w-64 h-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent mx-auto"></div>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center items-center gap-22 md:gap-20 max-w-6xl mx-auto">

          {cards.map((card) => (
            <div
              key={card.id}
              className="relative cursor-pointer"
              onClick={() => navigate(card.route)}
            >
              <CardFront title={card.title} imageUrl={card.image} />
            </div>
          ))}

        </div>
      </div>
    </Background>
  );
};

export default StoryboardShowcase;
