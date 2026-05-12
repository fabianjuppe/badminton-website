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
  font-size: 20px;
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

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Message = styled.p`
  font-size: 13px;
  color: ${({ $error }) => ($error ? "#dc2626" : "#059669")};
  margin: 0;
  text-align: center;
`;

export default function ChangePasswordForm({ onClose }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage(null);

    if (newPassword !== confirmPassword) {
      setIsError(true);
      setMessage("Neue Passwörter stimmen nicht überein");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/user/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      const data = await response.json();

      if (!response.ok) {
        setIsError(true);
        setMessage(data.error);
        return;
      }

      setIsError(false);
      setMessage("Passwort erfolgreich geändert");
      setTimeout(onClose, 1500);
    } catch {
      setIsError(true);
      setMessage("Verbindungsfehler");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TopRow>
        <Title>Passwort ändern</Title>
        <CloseButton
          type="button"
          onClick={onClose}
          aria-label="Close Change Password"
        >
          ✕
        </CloseButton>
      </TopRow>

      <Field>
        <Label htmlFor="currentPassword">Aktuelles Passwort</Label>
        <Input
          type="password"
          id="currentPassword"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          placeholder="Aktuelles Passwort"
          required
        />
      </Field>

      <Field>
        <Label htmlFor="newPassword">Neues Passwort</Label>
        <Input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Neues Passwort"
          required
        />
      </Field>

      <Field>
        <Label htmlFor="confirmPassword">Neues Passwort bestätigen</Label>
        <Input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Neues Passwort bestätigen"
          required
        />
      </Field>

      {message && <Message $error={isError}>{message}</Message>}

      <SubmitButton type="submit" disabled={isLoading}>
        {isLoading ? "Wird geändert..." : "Passwort ändern"}
      </SubmitButton>
    </Form>
  );
}
