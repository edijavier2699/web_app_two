import { Button } from "@/components/ui/button";
import { useState } from "react";
import { NewsletterPreview } from "@/components/newsletterPreview";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { LoadingSpinner } from "@/components/loadingSpinner"; // Asegúrate de importar el spinner

export const NewsletterEmailFormFlow = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false); // Estado de carga

  const [formValues, setFormValues] = useState({
    recipientEmail: "",
    firstTitle: "",
    firstDescription: "",
    secondCategory: "",
    secondTitle: "",
    secondImageUrl: "",
    secondDescription: "",
    secondLink: "",
    thirdCategory: "",
    thirdTitle: "",
    thirdImageUrl: "",
    thirdDescription: "",
    thirdLink: "",
    fourthCategory: "",
    fourthTitle: "",
    fourthImageUrl: "",
    fourthDescription: "",
    fourthLink: "",
    articleUrlOne: "",
    articleLinkTitleOne: "",
    articleUrlTwo: "",
    articleLinkTitleTwo: "",
    articleUrlThree: "",
    articleLinkTitleThree: "",
    articleUrlFour: "",
    articleLinkTitleFour: "",
    conclusion: "",
  });

  const handleInputsOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const backStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
 
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true); // Activar el estado de carga
    const apiUrl = `${import.meta.env.VITE_BACKEND_URL}newsletter/send-newsletter/`;

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(apiUrl, formValues, config);
      toast({
        title: "Congrats!",
        description: response.data.message,
      });
      setFormValues({
        recipientEmail: "",
        firstTitle: "",
        firstDescription: "",
        secondCategory: "",
        secondTitle: "",
        secondImageUrl: "",
        secondDescription: "",
        secondLink: "",
        thirdCategory: "",
        thirdTitle: "",
        thirdImageUrl: "",
        thirdDescription: "",
        thirdLink: "",
        fourthCategory: "",
        fourthTitle: "",
        fourthImageUrl: "",
        fourthDescription: "",
        fourthLink: "",
        articleUrlOne: "",
        articleLinkTitleOne: "",
        articleUrlTwo: "",
        articleLinkTitleTwo: "",
        articleUrlThree: "",
        articleLinkTitleThree: "",
        articleUrlFour: "",
        articleLinkTitleFour: "",
        conclusion: "",
      });
      
      setCurrentStep(1);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false); // Desactivar el estado de carga al final
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <FirstSection onInputChange={handleInputsOnChange} formValues={formValues} />;
      case 2:
        return <SecondSection onInputChange={handleInputsOnChange} formValues={formValues} />;
      case 3:
        return <ThirdSection onInputChange={handleInputsOnChange} formValues={formValues} />;
      case 4:
        return <FourthSection onInputChange={handleInputsOnChange} formValues={formValues} />;
      case 5: 
        return <ArticleSection onInputChange={handleInputsOnChange} formValues={formValues}  />
      case 6:
        return (
          <div>
            <NewsletterPreview {...formValues} />
          </div>
        );
      default:
        return <FirstSection onInputChange={handleInputsOnChange} formValues={formValues} />;
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {renderStep()}
      <div className="flex w-full mt-5 justify-between">
        {currentStep > 1 && <Button type="button" onClick={backStep}>Back</Button>}
        {isLoading ? ( // Mostrar el spinner si está cargando
          <LoadingSpinner />
        ) : (
          <>
            {currentStep <= 5 && (
              <Button type="button" onClick={nextStep}>Continue</Button>
            )}
            {currentStep === 6 && (
              <Button type="submit">Submit</Button>
            )}
          </>
        )}
      </div>
    </form>
  );
};

interface FirstSectionProps {
  onInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  formValues: {
    recipientEmail: string;
    firstTitle: string;
    firstDescription: string;
  };
}

export const FirstSection: React.FC<FirstSectionProps> = ({ onInputChange, formValues }) => {
  return(
    <div className="bg-[#F3F4F6] p-6 space-y-4 rounded-lg">
     <h3 className="text-lg font-semibold">First Section</h3>
     <div>
        <label htmlFor="recipientEmail" className="block text-sm font-medium text-gray-700">
          Recipient Email
        </label>
        <input
          id="recipientEmail"
          type="email"
          name="recipientEmail"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          placeholder="Enter Recipient Email"
          value={formValues.recipientEmail}
          onChange={onInputChange}
        />
      </div>

      {/* First Title */}
      <div>
        <label htmlFor="firstTitle" className="block text-sm font-medium text-gray-700">
          First Title
        </label>
        <input
          id="firstTitle"
          type="text"
          name="firstTitle"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          placeholder="Enter First Title"
          value={formValues.firstTitle}
          onChange={onInputChange}
        />
      </div>

      {/* First Description */}
      <div>
        <label htmlFor="firstDescription" className="block text-sm font-medium text-gray-700">
          First Description
        </label>
        <textarea
          id="firstDescription"
          name="firstDescription"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          placeholder="Enter First Description"
          value={formValues.firstDescription}
          onChange={onInputChange}
        />
      </div>
    </div>
  )
}

interface SecondSectionProps {
  formValues:{
    secondCategory: string,
    secondTitle: string,
    secondImageUrl: string,
    secondDescription: string,
    secondLink:string
  }
  onInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>void
}

export const SecondSection: React.FC<SecondSectionProps>= ({onInputChange, formValues}) =>{
  return(
    <div className="bg-[#F3F4F6] p-6 space-y-4 rounded-lg">
    <h3 className="text-lg font-semibold">Second Section</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <label htmlFor="secondCategory" className="block text-sm font-medium text-gray-700">
          Second Category
        </label>
        <input
          id="secondCategory"
          type="text"
          name="secondCategory"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          placeholder="Enter Second Category"
          value={formValues.secondCategory}
          onChange={onInputChange}
        />
      </div>

      <div>
        <label htmlFor="secondTitle" className="block text-sm font-medium text-gray-700">
          Second Title
        </label>
        <input
          id="secondTitle"
          type="text"
          name="secondTitle"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          placeholder="Enter Second Title"
          value={formValues.secondTitle}
          onChange={onInputChange}
        />
      </div>

      <div>
        <label htmlFor="secondImageUrl" className="block text-sm font-medium text-gray-700">
          Second Image URL
        </label>
        <input
          id="secondImageUrl"
          type="text"
          name="secondImageUrl"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          placeholder="Enter Second Image URL"
          value={formValues.secondImageUrl}
          onChange={onInputChange}
        />
      </div>
    </div>

    <div>
      <label htmlFor="secondDescription" className="block text-sm font-medium text-gray-700">
        Second Description
      </label>
      <textarea
        id="secondDescription"
        name="secondDescription"
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        placeholder="Enter Second Description"
        value={formValues.secondDescription}
        onChange={onInputChange}
      />
    </div>

    <div>
      <label htmlFor="secondLink" className="block text-sm font-medium text-gray-700">
        Second Link
      </label>
      <input
        id="secondLink"
        type="text"
        name="secondLink"
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        placeholder="Enter Link URL"
        value={formValues.secondLink}
        onChange={onInputChange}
      />
    </div>
    </div>
  )
}

interface ThirdSection {
  formValues:{
    thirdCategory: string,
    thirdTitle: string,
    thirdImageUrl: string,
    thirdDescription: string,
    thirdLink:string
  }
  onInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>void
}

export const ThirdSection:React.FC<ThirdSection> = ({onInputChange, formValues}) =>{
  return(
    <div className="bg-[#F3F4F6] p-6 space-y-4 rounded-lg">
     <h3 className="text-lg font-semibold">Third Section</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="thirdCategory" className="block text-sm font-medium text-gray-700">
            Third Category
          </label>
          <input
            id="thirdCategory"
            type="text"
            name="thirdCategory"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Enter Third Category"
            value={formValues.thirdCategory}
            onChange={onInputChange}
          />
        </div>

        <div>
          <label htmlFor="thirdTitle" className="block text-sm font-medium text-gray-700">
            Third Title
          </label>
          <input
            id="thirdTitle"
            type="text"
            name="thirdTitle"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Enter Third Title"
            value={formValues.thirdTitle}
            onChange={onInputChange}
          />
        </div>

        <div>
          <label htmlFor="thirdImageUrl" className="block text-sm font-medium text-gray-700">
            Third Image URL
          </label>
          <input
            id="thirdImageUrl"
            type="text"
            name="thirdImageUrl"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Enter Third Image URL"
            value={formValues.thirdImageUrl}
            onChange={onInputChange}
          />
        </div>
      </div>

      <div>
        <label htmlFor="thirdDescription" className="block text-sm font-medium text-gray-700">
          Third Description
        </label>
        <textarea
          id="thirdDescription"
          name="thirdDescription"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          placeholder="Enter Third Description"
          value={formValues.thirdDescription}
          onChange={onInputChange}
        />
      </div>

      <div>
        <label htmlFor="thirdLink" className="block text-sm font-medium text-gray-700">
          Third Link
        </label>
        <input
          id="thirdLink"
          type="text"
          name="thirdLink"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          placeholder="Enter Third Link"
          value={formValues.thirdLink}
          onChange={onInputChange}
        />
      </div>
   </div>
  )
}

interface FourthSectionProps{
  onInputChange: (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  formValues:{
    fourthCategory: string,
    fourthTitle:string,
    fourthImageUrl: string,
    fourthDescription: string,
    fourthLink:string
  }
}

export const FourthSection:React.FC<FourthSectionProps> = ({formValues, onInputChange}) =>{
  return(
    <div className="bg-[#F3F4F6] p-6 space-y-4 rounded-lg">
      <h3 className="text-lg font-semibold">Fourth Section</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="fourthCategory" className="block text-sm font-medium text-gray-700">
            Fourth Category
          </label>
          <input
            id="fourthCategory"
            type="text"
            name="fourthCategory"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Enter Fourth Category"
            value={formValues.fourthCategory}
            onChange={onInputChange}
          />
        </div>

        <div>
          <label htmlFor="fourthTitle" className="block text-sm font-medium text-gray-700">
            Fourth Title
          </label>
          <input
            id="fourthTitle"
            type="text"
            name="fourthTitle"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Enter Fourth Title"
            value={formValues.fourthTitle}
            onChange={onInputChange}
          />
        </div>

        <div>
          <label htmlFor="fourthImageUrl" className="block text-sm font-medium text-gray-700">
            Fourth Image URL
          </label>
          <input
            id="fourthImageUrl"
            type="text"
            name="fourthImageUrl"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Enter Fourth Image URL"
            value={formValues.fourthImageUrl}
            onChange={onInputChange}
          />
        </div>
      </div>

      <div>
        <label htmlFor="fourthDescription" className="block text-sm font-medium text-gray-700">
          Fourth Description
        </label>
        <textarea
          id="fourthDescription"
          name="fourthDescription"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          placeholder="Enter Fourth Description"
          value={formValues.fourthDescription}
          onChange={onInputChange}
        />
      </div>

      <div>
        <label htmlFor="fourthLink" className="block text-sm font-medium text-gray-700">
          Fourth Link
        </label>
        <input
          id="fourthLink"
          type="text"
          name="fourthLink"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          placeholder="Enter Fourth Link"
          value={formValues.fourthLink}
          onChange={onInputChange}
        />
      </div>
    </div>
  )
}

interface ArticleSectionProps {
  formValues:{
    articleUrlOne:string,
    articleLinkTitleOne:string,
    articleUrlTwo:string,
    articleLinkTitleTwo:string,
    articleUrlThree:string,
    articleLinkTitleThree:string,
    articleUrlFour:string,
    articleLinkTitleFour:string,
    conclusion:string
  }
  onInputChange: (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export const ArticleSection:React.FC<ArticleSectionProps> = ({formValues, onInputChange}) =>{
  return(
    <div className="bg-[#F3F4F6] p-6 space-y-4 rounded-lg">
       <h3 className="text-lg font-semibold">Article Links</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="articleUrlOne" className="block text-sm font-medium text-gray-700">
            Article URL One
          </label>
          <input
            id="articleUrlOne"
            type="text"
            name="articleUrlOne"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Enter Article URL One"
            value={formValues.articleUrlOne}
            onChange={onInputChange}
          />
        </div>

        <div>
          <label htmlFor="articleLinkTitleOne" className="block text-sm font-medium text-gray-700">
            Article Link Title One
          </label>
          <input
            id="articleLinkTitleOne"
            type="text"
            name="articleLinkTitleOne"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Enter Article Link Title One"
            value={formValues.articleLinkTitleOne}
            onChange={onInputChange}
          />
        </div>

        <div>
          <label htmlFor="articleUrlTwo" className="block text-sm font-medium text-gray-700">
            Article URL Two
          </label>
          <input
            id="articleUrlTwo"
            type="text"
            name="articleUrlTwo"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Enter Article URL Two"
            value={formValues.articleUrlTwo}
            onChange={onInputChange}
          />
        </div>

        <div>
          <label htmlFor="articleLinkTitleTwo" className="block text-sm font-medium text-gray-700">
            Article Link Title Two
          </label>
          <input
            id="articleLinkTitleTwo"
            type="text"
            name="articleLinkTitleTwo"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Enter Article Link Title Two"
            value={formValues.articleLinkTitleTwo}
            onChange={onInputChange}
          />
        </div>

        <div>
          <label htmlFor="articleUrlThree" className="block text-sm font-medium text-gray-700">
            Article URL Three
          </label>
          <input
            id="articleUrlThree"
            type="text"
            name="articleUrlThree"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Enter Article URL Three"
            value={formValues.articleUrlThree}
            onChange={onInputChange}
          />
        </div>

        <div>
          <label htmlFor="articleLinkTitleThree" className="block text-sm font-medium text-gray-700">
            Article Link Title Three
          </label>
          <input
            id="articleLinkTitleThree"
            type="text"
            name="articleLinkTitleThree"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Enter Article Link Title Three"
            value={formValues.articleLinkTitleThree}
            onChange={onInputChange}
          />
        </div>

        <div>
          <label htmlFor="articleUrlFour" className="block text-sm font-medium text-gray-700">
            Article URL Four
          </label>
          <input
            id="articleUrlFour"
            type="text"
            name="articleUrlFour"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Enter Article URL Four"
            value={formValues.articleUrlFour}
            onChange={onInputChange}
          />
        </div>

        <div>
          <label htmlFor="articleLinkTitleFour" className="block text-sm font-medium text-gray-700">
            Article Link Title Four
          </label>
          <input
            id="articleLinkTitleFour"
            type="text"
            name="articleLinkTitleFour"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Enter Article Link Title Four"
            value={formValues.articleLinkTitleFour}
            onChange={onInputChange}
          />
        </div>
      </div>
      <div className="w-full">
          <label htmlFor="conclusion" className="block text-sm font-medium text-gray-700">
              Conclusion
            </label>
            <textarea
              id="conclusion"
              name="conclusion"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Enter Newsletter Conclusion"
              value={formValues.conclusion}
              onChange={onInputChange}
            />
        </div>
    </div>
  )
}