import React, { useState, useRef } from "react";
import "../styles/faqAccordion.css";

interface Section {
  id: string;
  title: string;
  content: string;
}

interface FaqAccordionProps {
  sections: Section[]; // Receiving the questions as a prop
  onSelectTitle: (title: string) => void; // Prop to send the section title to the parent component
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ sections, onSelectTitle }) => {
  const [selected, setSelected] = useState<number>(0); 
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]); // References for the questions

  const handleOnSelect = (index: number) => {
    setSelected(index); // Update the selected question index
    onSelectTitle(sections[index].title); // Pass the title to the function for sending it

    // Scroll to the selected question with additional offset
    setTimeout(() => {
      const offset = 20; // Additional space from the top
      const element = questionRefs.current[index];

      if (element) {
        const elementPosition = element.getBoundingClientRect().top; // Get the position of the element
        const offsetPosition = elementPosition + window.scrollY - offset; // Calculate the final position
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth" // Smooth scroll
        });
      }
    }, 0); // Wait for the DOM to update before performing the scroll
  };

  return (
    <section className="flex flex-col space-x-4 md:flex-row mt-5">
      <article className="w-full md:w-2/3 space-y-3 pt-5 articleSide "> 
        {sections.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (questionRefs.current[index] = el)} // Assign reference to the div
            className={`rounded-xl p-4 transition duration-300 ${selected === index ? "bg-[#F4FAE2] text-[#577B14]" : "bg-[#F9FAFB]"}`}
          >
            <h4
              className="font-bold m-0 p-0 cursor-pointer"
              onClick={() => handleOnSelect(index)}
            >
              {item.title}
            </h4>
            <div
              dangerouslySetInnerHTML={{
                __html: item.content.replace(/\n/g, '<br />'), // Replace newlines with <br />
              }}
            />
          </div>
        ))}
      </article>
      <aside className="w-full md:w-1/3  md:sticky top-0 max-h-[80vh] overflow-y-auto titleSide">
        <ul className="flex pt-5 flex-col">
          {sections.map((item, index) => (
            <li
              key={item.id}
              onClick={() => handleOnSelect(index)} // Call the function with the index
              className={`border-l-2 h-[auto] py-3 border-x-0 border-t-0 border-b-0 pl-2 cursor-pointer transition duration-300 ${selected === index ? "text-[#C8E870] font-bold border-l-[#C8E870]" : ""}`}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
};
