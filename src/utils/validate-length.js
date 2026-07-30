import createError from './app-error.js';

// Validação centralizada de tamanho máximo de campos de texto — usada pelos
// services de User, Table e Character para manter mensagens consistentes.
export function assertMaxLength(value, max, fieldName) {
  if (value === undefined || value === null) return;
  if (String(value).length > max) {
    throw createError(`${fieldName} deve ter no máximo ${max} caracteres.`, 400);
  }
}
