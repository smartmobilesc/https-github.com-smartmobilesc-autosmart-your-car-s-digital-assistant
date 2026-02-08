// lib/resend.ts

import Resend from 'resend';

// Initialize Resend email client
const resend = new Resend('YOUR_API_KEY');

// Helper function to send welcome email
export const sendWelcomeEmail = async (to: string, name: string) => {
    const response = await resend.sendEmail({
        to,
        subject: `Welcome to our service, ${name}!`,
        html: `<h1>Welcome, ${name}!</h1><p>We are thrilled to have you here.</p>`
    });
    return response;
};

// Helper function to send maintenance alert
export const sendMaintenanceAlert = async (to: string, vehicle: string) => {
    const response = await resend.sendEmail({
        to,
        subject: `Maintenance Alert for ${vehicle}`,
        html: `<h1>Maintenance Alert</h1><p>Your vehicle ${vehicle} requires maintenance.</p>`
    });
    return response;
};

// Helper function to send diagnostic report
export const sendDiagnosticReport = async (to: string, report: string) => {
    const response = await resend.sendEmail({
        to,
        subject: 'Your Diagnostic Report',
        html: `<h1>Diagnostic Report</h1><p>${report}</p>`
    });
    return response;
};

// Helper function to send custom email
export const sendCustomEmail = async (to: string, subject: string, html: string) => {
    const response = await resend.sendEmail({
        to,
        subject,
        html
    });
    return response;
};

// Helper function to send batch emails
export const sendBatchEmails = async (emails: Array<{to: string, subject: string, html: string}>) => {
    const responses = await Promise.all(emails.map(({to, subject, html}) => resend.sendEmail({ to, subject, html })));
    return responses;
};