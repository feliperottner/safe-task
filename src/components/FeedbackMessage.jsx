/**Componente para mostrar mensagens de feedback ao usuário. */
import React from 'react';
import { Alert } from 'react-bootstrap';

/**
 * - message: texto da mensagem
 * - variant: tipo de alerta
 */
const FeedbackMessage = ({ message, variant }) => (
  message ? (
    <Alert variant={variant || 'success'} className="mt-3">
      {message}
    </Alert>
  ) : null
);

export default FeedbackMessage;
