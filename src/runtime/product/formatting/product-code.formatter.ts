export class ProductCodeFormatter {
  static format(sequence: number): string {
    const padded = sequence.toString().padStart(6, '0');
    return `PRD-${padded}`;
  }
}
