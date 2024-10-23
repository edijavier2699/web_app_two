import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import backgroundImage from "../assets/background.png"
import logo from "../assets/logoSVG.svg"
import { useNavigate } from "react-router-dom"

export const RequestInvitation: React.FC = () => {
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        emailAddress: "",
        howHeardAboutUs: ""
    })
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        emailAddress: "",
        howHeardAboutUs: ""
    })

    const navigate = useNavigate()

    // Validación de email y nombre/apellido
    const validateForm = () => {
        let valid = true
        let errors = { firstName: "", lastName: "", emailAddress: "", howHeardAboutUs: "" }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        // Validar correo electrónico
        if (!formValues.emailAddress.trim()) {
            errors.emailAddress = "Email cannot be empty."
            valid = false
        } else if (!emailRegex.test(formValues.emailAddress)) {
            errors.emailAddress = "Please enter a valid email address (e.g., example@domain.com)."
            valid = false
        }

        const nameRegex = /^[A-Za-z]+$/

        // Validar nombre (sin espacios en blanco)
        if (!formValues.firstName.trim()) {
            errors.firstName = "First name cannot be empty."
            valid = false
        } else if (/\s/.test(formValues.firstName)) {
            errors.firstName = "First name cannot contain spaces."
            valid = false
        } else if (!nameRegex.test(formValues.firstName)) {
            errors.firstName = "First name can only contain letters."
            valid = false
        } else if (formValues.firstName.length < 2) {
            errors.firstName = "First name must be at least 2 characters."
            valid = false
        }

        // Validar apellido (sin espacios en blanco)
        if (!formValues.lastName.trim()) {
            errors.lastName = "Last name cannot be empty."
            valid = false
        } else if (/\s/.test(formValues.lastName)) {
            errors.lastName = "Last name cannot contain spaces."
            valid = false
        } else if (!nameRegex.test(formValues.lastName)) {
            errors.lastName = "Last name can only contain letters."
            valid = false
        } else if (formValues.lastName.length < 2) {
            errors.lastName = "Last name must be at least 2 characters."
            valid = false
        }

        // Validar campo de selección
        if (!formValues.howHeardAboutUs) {
            errors.howHeardAboutUs = "Please select how you heard about us."
            valid = false
        }

        setErrors(errors)
        return valid
    }

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        if (validateForm()) {
            // Lógica para enviar el formulario
            console.log("Form Submitted", formValues)
        }
    }

    const handleInputsOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const handleSelectChange = (value: string) => {
        setFormValues({
            ...formValues,
            howHeardAboutUs: value
        })
    }

    const isFormComplete = () => {
        return formValues.firstName && formValues.lastName && formValues.emailAddress && formValues.howHeardAboutUs;
    };
    

    return (
        <section
            className="w-full h-screen py-0 px-[20px] sm:px-[60px]"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >   
            <img alt="tokunize" src={logo} className="h-12 w-auto mt-3  cursor-pointer" onClick={()=>{navigate("/")}} />
            
            <form onSubmit={handleFormSubmit} className="space-y-6 max-w-lg p-6  mx-auto rounded-lg bg-white shadow-lg">
                <h3 className="text-center text-2xl font-bold">Request an Invitation</h3>
                <p className="text-center text-gray-600 text-sm">Join us by requesting an invitation. Complete the form below to get started and get all the benefits.</p>
                
                <div className="flex flex-col md:flex-row w-full gap-4">
                    <div className="w-full md:w-1/2 space-y-1">
                        <Label htmlFor="firstName" className="text-sm font-semibold">First Name</Label>
                        <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            value={formValues.firstName}
                            onChange={handleInputsOnChange}
                            placeholder="First Name"
                            className="border rounded-md px-3 py-2"
                        />
                        {errors.firstName && <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>}
                    </div>
                    <div className="w-full md:w-1/2 space-y-1">
                        <Label htmlFor="lastName" className="text-sm font-semibold">Last Name</Label>
                        <Input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formValues.lastName}
                            onChange={handleInputsOnChange}
                            placeholder="Last Name"
                            className="border rounded-md px-3 py-2"
                        />
                        {errors.lastName && <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>}
                    </div>
                </div>

                <div className="space-y-1">
                    <Label htmlFor="emailAddress" className="text-sm font-semibold">Email Address</Label>
                    <Input
                        id="emailAddress"
                        name="emailAddress"
                        placeholder="Email Address"
                        value={formValues.emailAddress}
                        onChange={handleInputsOnChange}
                        type="email"
                        className="border rounded-md px-3 py-2"
                    />
                    {errors.emailAddress && <p className="text-red-600 text-sm mt-1">{errors.emailAddress}</p>}
                </div>

                <div className="space-y-1">
                    <Label htmlFor="howHeardAboutUs" className="text-sm font-semibold">How did you hear about us?</Label>
                    <Select onValueChange={handleSelectChange}>
                        <SelectTrigger className="border rounded-md px-3 py-2 w-full">
                            <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Options</SelectLabel>
                                <SelectItem value="linkedin">LinkedIn</SelectItem>
                                <SelectItem value="instagram">Instagram</SelectItem>
                                <SelectItem value="blog">Blog</SelectItem>
                                <SelectItem value="newsletter">Email Newsletter</SelectItem>
                                <SelectItem value="investor">Referred by an investor</SelectItem>
                                <SelectItem value="developer">Referred by a developer</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    {errors.howHeardAboutUs && <p className="text-red-600 text-sm mt-1">{errors.howHeardAboutUs}</p>}
                </div>

                <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={!isFormComplete()}
                >
                    Request Invitation
                </Button>

                <p className="text-center text-gray-600 text-sm mt-4">By requesting an invitation, you agree to our <a href="/terms-of-services/" className="text-[#82A621]">Terms</a> and <a href="/privacy-policy/"  className="text-[#82A621]">Privacy policy</a>.</p>
            </form>
        </section>

    )
}
