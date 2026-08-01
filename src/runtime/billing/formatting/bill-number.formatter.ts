export class BillNumberFormatter {
  static format(deviceCode: string, sequence: number): string {
    const padded = sequence.toString().padStart(6, '0');
    return `${deviceCode}-${padded}`;
  }
}
