export type EventName = 'form_start' | 'form_submit' | 'form_submit_success' | 'form_submit_error';

export const trackEvent = (eventName: EventName, data?: any) => {
  console.log(`[Analytics] ${eventName}`, data);
};