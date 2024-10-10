import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import SearchBar from '../../../components/search/SearchBar';
import {it} from '@jest/globals';
import { Text, View } from 'react-native';


describe('SearchBar Component', () => {
  // Snapshot test to ensure UI rendering
  it('renders correctly', () => {
      const tree = renderer.create(<SearchBar />).toJSON();
      expect(tree).toMatchSnapshot();
  });

  // Test if the SearchBar component contains the correct number of text elements
  it('should render the correct number of text elements', () => {
      const instance = renderer.create(<SearchBar />);
      const textInstances = instance.root.findAllByType(Text);
      expect(textInstances.length).toBe(7); // Update to reflect the actual count: "Where to?", "Anywhere", "Any week", "Add guests", and 3 other text components (like separators).
  });

  

// Test if the leading text is rendered correctly

it('should render leading text correctly', () => {
  const instance = renderer.create(<SearchBar />);
  
  // Find all text instances
  const textInstances = instance.root.findAllByType(Text);

  // Log the text instances to inspect their structure
  console.log(textInstances.map(text => text.props.children));

  // Look for the specific text content within the text instances
  const leadingText = textInstances.find(text => text.props.children === 'Where to?');

  expect(leadingText).toBeTruthy(); // Check if the leading text exists
  expect(leadingText?.props.children).toBe('Where to?'); // Verify the content of the leading text
});




  // Test if the search icon is rendered
  it('should render the search icon', () => {
      const instance = renderer.create(<SearchBar />);
      const searchIcon = instance.root.findByProps({ name: "search" });
      expect(searchIcon).toBeTruthy();
  });

  // Test if the dot icons are rendered
  it('should render dot icons correctly', () => {
      const instance = renderer.create(<SearchBar />);
      const dotIcons = instance.root.findAllByProps({ name: "dot-fill" });
      expect(dotIcons.length).toBe(2); // There should be two dot icons
  });

  // Test if the search icon has the correct size
  it('should have the search icon size of 36', () => {
      const instance = renderer.create(<SearchBar />);
      const searchIcon = instance.root.findByProps({ name: "search" });
      expect(searchIcon.props.size).toBe(36);
  });

  // Test if the styles are applied correctly
  it('should apply correct styles to the wrapper', () => {
      const instance = renderer.create(<SearchBar />);
      const wrapper = instance.root.findByType(View);
      expect(wrapper.props.style).toEqual(
          expect.objectContaining({
              borderWidth: 1,
              borderRadius: 20,
              height: 60,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
          })
      );
  });
});