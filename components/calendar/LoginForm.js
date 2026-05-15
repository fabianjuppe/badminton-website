import { signIn } from "next-auth/react";
import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 600;
  color: #292b2e;
  margin: 0;
`;

const CloseButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  border: 1px solid #d1d5db;
  background: #ffffff;
  color: #374151;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: #f9fafb;
      border-color: #374151;
    }
  }

  &:active {
    transform: scale(0.95);
    background: #f9fafb;
    border-color: #374151;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  font-size: 11px;
  font-weight: 600;
  color: #108197;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const Input = styled.input`
  padding: 10px 12px;
  border-radius: 8px;
  border: 1.5px solid #b1f2ff;
  background: #f8feff;
  font-size: 14px;
  color: #292b2e;
  outline: none;
  width: 100%;

  &:focus {
    border-color: #108197;
    background: #fff;
  }
`;

const Error = styled.p`
  color: #f34e4e;
`;

const SubmitButton = styled.button`
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: #108197;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: #0c6474;
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default function LoginForm({ onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    const result = await signIn("credentials", {
      username: username.toLowerCase(),
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Benutzername oder Passwort falsch!");
    } else {
      window.location.href = "/";
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TopRow>
        <Title>Anmelden</Title>
        <CloseButton type="button" onClick={onClose} aria-label="Close Login">
          ✕
        </CloseButton>
      </TopRow>

      <Field>
        <Label htmlFor="username">Benutzername</Label>
        <Input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Benutzername eingeben"
          required
        />
      </Field>

      <Field>
        <Label htmlFor="password">Passwort</Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Passwort eingeben"
          required
        />
      </Field>

      {error && <Error>{error}</Error>}

      <SubmitButton type="submit">Anmelden</SubmitButton>
    </Form>
  );
}
