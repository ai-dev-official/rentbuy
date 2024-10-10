import 'react-native';
import React from 'react';
import { it, describe, expect } from '@jest/globals';
import renderer from 'react-test-renderer';
import { stays } from '../../../components/stays/stays';
import { render, fireEvent } from '@testing-library/react-native';
import { Dimensions } from 'react-native';
import Stay from '../../../components/stays/stay';




describe('Stay Component', () => {

    // Snapshot test to ensure UI rendering
  it('renders correctly', () => {
    const tree = renderer.create(<Stay />).toJSON();
    expect(tree).toMatchSnapshot();
    });

  
  it('renders the Stay component correctly', () => {
    const { getAllByTestId } = render(<Stay />);
    const stayComponents = getAllByTestId('stay-component');
    expect(stayComponents.length).toBe(stays.length);
  });

  it('renders the correct number of images for each stay', () => {
    stays.forEach((stay, index) => {
      const { getAllByTestId } = render(<Stay />);
      const images = getAllByTestId(`image-${index}`);
      expect(images.length).toBe(stay.images.length);
    });
  });

//   it('updates currentIndex correctly when scrolling images', () => {
//     const { getByTestId } = render(<Stay />);
//     const imageScroll = getByTestId('image-scroll-0');

//     fireEvent.scroll(imageScroll, {
//       nativeEvent: {
//         contentOffset: { x: Dimensions.get('window').width },
//       },
//     });

//     // Implement state check based on how you manage state in your component
//     Example: expect(state.currentIndex).toBe(1);
//   });

  it('displays the correct information for each stay', () => {
    stays.forEach((stay, index) => {
      const { getByText } = render(<Stay />);
      expect(getByText(`${stay.city}, ${stay.country}`)).toBeTruthy();
      expect(getByText(`${stay.rating}`)).toBeTruthy();
      expect(getByText(`€${stay.price}`)).toBeTruthy();
      expect(getByText(`${stay.dates.month}. ${stay.dates.begin} - ${stay.dates.end}`)).toBeTruthy();
    });
  });

  it('renders the correct number of stars based on the rating', () => {
    stays.forEach((stay) => {
      const { getAllByTestId } = render(<Stay />);
      const fullStars = getAllByTestId('full-star');
      const halfStars = getAllByTestId('half-star');
      const emptyStars = getAllByTestId('empty-star');
      
      const expectedFullStars = Math.floor(stay.rating);
      const expectedHalfStars = stay.rating % 1 >= 0.5 ? 1 : 0;
      const expectedEmptyStars = 5 - expectedFullStars - expectedHalfStars;

      expect(fullStars.length).toBe(expectedFullStars);
      expect(halfStars.length).toBe(expectedHalfStars);
      expect(emptyStars.length).toBe(expectedEmptyStars);
    });
  });

  it('toggles the favorite state when clicking the button', () => {
    const { getByText, getByTestId } = render(<Stay />);
    const favoriteButton = getByTestId('favorite-button-0');
    
    fireEvent.press(favoriteButton);

    // Test if the state or style of the button changes accordingly
    expect(getByText('Unfavorite')).toBeTruthy();
  });

  it('shows the correct dot as active based on currentIndex', () => {
    const { getAllByTestId } = render(<Stay />);
    const activeDot = getAllByTestId('active-dot');
    
    // Expect only one dot to be active
    expect(activeDot.length).toBe(1);
  });

  it('has correct accessibility labels for images and buttons', () => {
    const { getByLabelText } = render(<Stay />);
    stays.forEach((stay) => {
      stay.images.forEach((_, index) => {
        expect(getByLabelText(`Image ${index + 1} of stay ${stay.city}`)).toBeTruthy();
      });
      expect(getByLabelText(`Favorite button for ${stay.city}`)).toBeTruthy();
    });
  });

  it('renders the Stay component correctly', () => {
    const { getAllByTestId } = render(<Stay stays={stays} />);
    const stayComponents = getAllByTestId('stay-component');
    expect(stayComponents.length).toBe(stays.length);
  });

  it('renders a message when no stays are available', () => {
    const { getByText } = render(<Stay stays={[]} />);
    expect(getByText('No stays available')).toBeTruthy();
  });

  it('renders correctly when a stay has no images', () => {
    const staysWithNoImages = [{ ...stays[0], images: [] }];
    const { queryByTestId } = render(<Stay stays={staysWithNoImages} />);
    expect(queryByTestId('image-0')).toBeNull();
  });


});
