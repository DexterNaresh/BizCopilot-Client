import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * Hashes a password/PIN using the Web Crypto API (SHA-256).
   * Note: For local offline-first authentication, we use native Web Crypto.
   * @param plaintext The raw password or PIN
   * @returns A promise that resolves to the hex-encoded hash string
   */
  async hashCredentials(plaintext: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(plaintext);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    
    // Convert ArrayBuffer to hex string
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  }

  /**
   * Validates a plaintext input against a stored hash.
   * @param plaintext The input to validate
   * @param storedHash The hash retrieved from the local database
   * @returns true if they match, false otherwise
   */
  async validateCredentials(plaintext: string, storedHash: string): Promise<boolean> {
    const computedHash = await this.hashCredentials(plaintext);
    return computedHash === storedHash;
  }
}
