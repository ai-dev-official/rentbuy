import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {it} from '@jest/globals';
import { cribs, Crib } from '../../../components/data/data.tsx';
import Cribs from '../../../components/crib/crib';
import { ScrollView, Text, View } from 'react-native';




describe('Cribs Component', () => {
    // Snapshot Test
    it('renders correctly', () => {
        const tree = renderer.create(<Cribs />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // Test to check if the component renders the correct number of cribs
    it('should render all cribs', () => {
        const component = renderer.create(<Cribs />);
        const instance = component.root;

        const cribItems = instance.findAll(
            (node) => node.type === View && node.props.testID === 'crib-item'
        );

        expect(cribItems.length).toBe(cribs.length);
    });

    // Test to verify that each crib displays the correct title
    it('should render all cribs', () => {
      const component = renderer.create(<Cribs />);
      const instance = component.root;

      const cribItems = instance.findAll(
          (node) => node.type === View && node.props.testID === 'crib-item'
      );

      expect(cribItems.length).toBe(cribs.length);
  });

    // Test to verify that each crib has an icon component
    it('each crib should display an icon', () => {
        const component = renderer.create(<Cribs />);
        const instance = component.root;

        cribs.forEach((crib) => {
            const icon = instance.find(
                (node) =>
                    node.props.testID === `icon-${crib.id}`
            );
            expect(icon).toBeTruthy();
        });
    });

    it('each crib should display the correct title', () => {
      const instance = renderer.create(<Cribs />).root;

      cribs.forEach((crib) => {
          const title = instance.find(
              (node) =>
                  node.type === Text && node.props.testID === `title-${crib.id}`
          );
          expect(title.props.children).toBe(crib.name);
      });
  });

    // Test to ensure the ScrollView is horizontal
    it('should have a horizontal ScrollView', () => {
      const component = renderer.create(<Cribs />);
      const scrollView = component.root.find(
          (node) => node.type === ScrollView
      );
      expect(scrollView.props.horizontal).toBe(true);
  });

    // Test if each crib has the correct dimensions
    it('crib items should have fixed width and height', () => {
      const component = renderer.create(<Cribs />);
      const instance = component.root;

      const cribItems = instance.findAll(
          (node) => node.type === View && node.props.testID === 'crib-item'
      );

      cribItems.forEach((cribItem) => {
          expect(cribItem.props.style.width).toBe(60);
          expect(cribItem.props.style.height).toBe(60);
      });
  });
});

