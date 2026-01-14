// Type definitions for the application

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceOption {
  name: string;
  price: number;
  perFinger?: boolean;
}

export interface ServiceCategory {
  name: string;
  options: ServiceOption[];
}

export interface Service {
  title: string;
  description: string;
  price: string;
  features: string[];
  color: string;
  borderColor: string;
  shadowColor: string;
  hoverColor: string;
}

export interface SelectedService {
  service: string;
  subtype?: string;
  option: string;
  basePrice: number;
  isPerFinger: boolean;
  totalPrice: number;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  message: string;
}
