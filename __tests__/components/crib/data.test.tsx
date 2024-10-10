import 'react-native';
import React from 'react';
import { it, describe, expect } from '@jest/globals';
import {Crib, cribs} from '../../../components/data/data';


describe('Cribs Data', () => {
    test('should be an array of cribs', () => {
        expect(Array.isArray(cribs)).toBe(true);
    });

    test('should contain the correct number of cribs', () => {
        expect(cribs.length).toBe(11); // Update this if the number of cribs changes
    });

    test('each crib should have the correct properties', () => {
        cribs.forEach((crib: Crib) => {
            expect(crib).toHaveProperty('id');
            expect(crib).toHaveProperty('icon');
            expect(crib).toHaveProperty('title');
            expect(crib).toHaveProperty('name');
            expect(crib).toHaveProperty('size');

            // Verify types
            expect(typeof crib.id).toBe('number');
            expect(typeof crib.icon).toBe('function'); // Since icon is a React component
            expect(typeof crib.title).toBe('string');
            expect(typeof crib.name).toBe('string');
            expect(typeof crib.size).toBe('number');
        });
    });

    test('each crib should have a unique id', () => {
        const ids = cribs.map(crib => crib.id);
        const uniqueIds = new Set(ids);
        expect(uniqueIds.size).toBe(ids.length); // Ensure all IDs are unique
    });

    test('each crib should have a size of 24', () => {
        cribs.forEach((crib: Crib) => {
            expect(crib.size).toBe(24); // Ensure all cribs have the same size
        });
    });

    test('title should be non-empty string', () => {
        cribs.forEach((crib: Crib) => {
            expect(crib.title).toBeTruthy(); // Ensure title is not empty
            expect(typeof crib.title).toBe('string');
        });
    });

    test('name should be a non-empty string', () => {
        cribs.forEach((crib: Crib) => {
            expect(crib.name).toBeTruthy(); // Ensure name is not empty
            expect(typeof crib.name).toBe('string');
        });
    });
});
