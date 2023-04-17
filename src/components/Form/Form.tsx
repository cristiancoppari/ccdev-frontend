import React, { useEffect, useMemo, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import Button from "../Buttons/Button";
import Cookies from "js-cookie";
import { toast } from "sonner";
import useSWRImmutable from "swr/immutable";

import type { FormData, RequestData, FormProps } from "../../types/types";

const Form = ({ endpoints }: FormProps) => {
    const [TOKEN_ENDPOINT, MAIL_ENDPOINT] = endpoints;

    const { data } = useSWRImmutable(TOKEN_ENDPOINT, fetcher);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    async function fetcher(url: string) {
        try {
            const response: AxiosResponse = await axios.get(url, {
                withCredentials: true,
            });
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    const csrfToken = data?.csrfToken;

    // Handler for the form submit event
    const submitHandler: SubmitHandler<FormData> = async (data: FormData) => {
        const axiosConfig: AxiosRequestConfig<RequestData> = {
            url: MAIL_ENDPOINT,
            method: "POST",
            data: {
                name: data.name,
                contact_reason: data.contact_reason,
                email: data.email,
                message: data.message,
            },
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                "x-csrf-token": csrfToken || "no token no mail",
            },
        };

        toast.promise(axios(axiosConfig), {
            loading: "Sending email...",
            success: "Message sent successfully!",
            error: "Something went wrong. Please try again later.",
        });
    };

    const nameValidationRules = {
        // required: "This field can't be empty.",
        required: {
            value: true,
            message: "This field can't be empty.",
        },
    };

    const emailValidationRules = {
        required: {
            value: true,
            message: "This field can't be empty.",
        },
        pattern: {
            value: /^\S+@\S+$/i,
            message: "You must enter a valid email address.",
        },
    };

    const contactReasonValidationRules = {
        required: {
            value: true,
            message: "This field can't be empty.",
        },
    };

    return (
        <section className="form-section section-margin-top">
            <div className="form-section__content">
                <h2>Let's talk!</h2>

                <p>
                    I'm always looking for new opportunities or projects to
                    work. And if that's not the case and you just wanted to say
                    hi, my inbox is always open.{" "}
                </p>
            </div>

            <div className="form-section__form">
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div className="form__group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Stuart Harold Pot"
                            className={errors.name ? "error" : ""}
                            // I have to use any to avoid making a custom validation.
                            // This is for the required value in the validation object.
                            // It expects a boolean, but I'm passing an string.
                            {...register("name", nameValidationRules)}
                        />
                        {errors.name && <small>{errors.name.message}</small>}
                    </div>

                    <div className="form__group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            placeholder="stuartpot@gmail.com"
                            className={errors.email ? "error" : ""}
                            {...register("email", emailValidationRules)}
                        />
                        {errors.email && <small>{errors.email.message}</small>}
                    </div>

                    <div className="form__group">
                        <label htmlFor="contact_reason">
                            Reason of contact
                        </label>
                        <select
                            id="contact_reason"
                            className={errors.contact_reason ? "error" : ""}
                            {...register(
                                "contact_reason",
                                contactReasonValidationRules
                            )}
                        >
                            <option value="">Select a option</option>
                            <option value="hi">Say hi</option>
                            <option value="opportunity">Job opportunity</option>
                            <option value="project">I need a website</option>
                        </select>
                        {errors.contact_reason && (
                            <small>{errors.contact_reason.message}</small>
                        )}
                    </div>

                    <div className="form__group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            cols={30}
                            rows={5}
                            placeholder="Your message goes here 😃"
                            className={errors.message ? "error" : ""}
                            {...register("message")}
                        ></textarea>
                        {errors.message && (
                            <small>{errors.message.message}</small>
                        )}
                    </div>

                    <Button type="submit" label="Send message" />
                </form>
            </div>
        </section>
    );
};

export default Form;
