import 'react-native';
import React from 'react';
import { it, describe, expect } from '@jest/globals';
import { stays } from '../../../components/stays/stays';

// A helper function to validate an individual stay object
const isHomeStay = (stay: any) => {
  // Basic type checks for each field in the HomeStay object
  return (
    typeof stay.id === 'number' &&
    typeof stay.name === 'string' &&
    Array.isArray(stay.images) &&
    stay.images.every((image) => typeof image === 'string') &&
    typeof stay.rating === 'number' &&
    typeof stay.city === 'string' &&
    typeof stay.country === 'string' &&
    typeof stay.dates === 'object' &&
    typeof stay.dates.month === 'string' &&
    typeof stay.dates.begin === 'number' &&
    typeof stay.dates.end === 'number' &&
    typeof stay.price === 'number' &&
    typeof stay.stayType === 'string'
  );
};

describe('HomeStay Data Tests', () => {
  it('should be an array', () => {
    expect(Array.isArray(stays)).toBe(true);
  });

  it('should have at least one stay', () => {
    expect(stays.length).toBeGreaterThan(0);
  });

  it('each stay should match the HomeStay structure', () => {
    stays.forEach((stay) => {
      expect(isHomeStay(stay)).toBe(true);
    });
  });

  it('should have unique IDs for each stay', () => {
    const ids = stays.map((stay) => stay.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('ratings should be between 0 and 5', () => {
    stays.forEach((stay) => {
      expect(stay.rating).toBeGreaterThanOrEqual(0);
      expect(stay.rating).toBeLessThanOrEqual(5);
    });
  });

  it('images array should have at least one image URL', () => {
    stays.forEach((stay) => {
      expect(stay.images.length).toBeGreaterThan(0);
      stay.images.forEach((image) => {
        expect(typeof image).toBe('string');
        expect(image).toMatch(/https?:\/\/.+\.(jpg|jpeg|png|webp)/);
      });
    });
  });

  it('begin date should be less than or equal to end date in each stay', () => {
    stays.forEach((stay) => {
      expect(stay.dates.begin).toBeLessThanOrEqual(stay.dates.end);
    });
  });

  it('price should be a positive number', () => {
    stays.forEach((stay) => {
      expect(stay.price).toBeGreaterThan(0);
    });
  });

  it('month should be a valid string and in the correct format', () => {
    const validMonths = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];
    stays.forEach((stay) => {
      expect(validMonths).toContain(stay.dates.month);
    });
  });

  it('stayType should be a non-empty string', () => {
    stays.forEach((stay) => {
      expect(typeof stay.stayType).toBe('string');
      expect(stay.stayType.length).toBeGreaterThan(0);
    });
  });

  it('country and city should be non-empty strings', () => {
    stays.forEach((stay) => {
      expect(typeof stay.country).toBe('string');
      expect(stay.country.length).toBeGreaterThan(0);
      expect(typeof stay.city).toBe('string');
      expect(stay.city.length).toBeGreaterThan(0);
    });
  });
});
