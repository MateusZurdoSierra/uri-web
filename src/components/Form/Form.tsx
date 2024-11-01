"use client";

import { useScrollContext } from "@/context/ScrollContext";
import { db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";

const Form: React.FC = () => {
  //@ts-ignore
  const { formRef } = useScrollContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [terms, setTerms] = useState(false);

  const clearStates = () => {
    setName("");
    setEmail("");
    setPhone("");
    setZipCode("");
    setStreet("");
    setNumber("");
    setCity("");
    setTerms(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "support"), {
        name,
        email,
        phone,
        zipCode,
        street,
        number,
        city,
        terms,
      });

      clearStates();
    } catch {
      console.error("Erro ao enviar suporte via Uri Web");
    }
  };

  return (
    <div ref={formRef} className="form_component">
      <div className="form_content">
        <form onSubmit={handleSubmit} method="POST">
          <label htmlFor="nome">Nome*</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={name}
            onChange={(text) => setName(text.target.value)}
            required
          />

          <label htmlFor="email">E-mail*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(text) => setEmail(text.target.value)}
            required
          />

          <label htmlFor="telefone">Número de telefone com DDD*</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={phone}
            onChange={(text) => setPhone(text.target.value)}
            required
          />

          <label htmlFor="cep">CEP*</label>
          <input
            type="text"
            id="cep"
            name="cep"
            value={zipCode}
            onChange={(text) => setZipCode(text.target.value)}
            required
          />

          <label htmlFor="rua">Rua*</label>
          <input
            type="text"
            id="rua"
            name="rua"
            value={street}
            onChange={(text) => setStreet(text.target.value)}
            required
          />

          <div className="form-inline">
            <div className="form-group">
              <label htmlFor="numero">Número*</label>
              <input
                type="text"
                id="numero"
                name="numero"
                value={number}
                onChange={(text) => setNumber(text.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="cidade">Cidade*</label>
              <input
                type="text"
                id="cidade"
                name="cidade"
                value={city}
                onChange={(text) => setCity(text.target.value)}
                required
              />
            </div>
          </div>

          <div className="checkbox">
            <input
              type="checkbox"
              id="terms"
              checked={terms}
              onChange={(check) => setTerms(check.target.checked)}
              required
            />
            <label htmlFor="terms" className="custom-checkbox-label">
              <p>
                Afirmo e concordo que as informações preenchidas neste
                formulário são verdadeiras, estou ciente que o time comercial do
                Uri entrará em contato.
              </p>
            </label>
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
