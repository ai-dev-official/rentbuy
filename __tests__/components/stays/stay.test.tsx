import 'react-native';
import React from 'react';
import { it, describe, expect } from '@jest/globals';
import { stays } from '../../../components/stays/stays';
import { render, fireEvent } from '@testing-library/react-native';
import Stay from '../../../components/stays/stay';
import renderer, { act } from 'react-test-renderer';
import { Dimensions, Text, Image, FlatList } from 'react-native';


describe('Stay Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Stay />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Stay Component', () => {
    it('renders correctly when there are no stays', () => {
      const { getByText } = render(<Stay stays={[]} />);
      expect(getByText('No stays available')).toBeTruthy();
    });
  
    it('renders stay information correctly', () => {
      const { getByText } = render(<Stay stays={stays} />);
      expect(getByText('Paris, France')).toBeTruthy();
      expect(getByText('€150')).toBeTruthy();
      expect(getByText('Oct. 1 - 5')).toBeTruthy();
    });
  
    it('updates currentIndex correctly when scrolling images', () => {
      const { getByTestId } = render(<Stay stays={stays} />);
      const imageScroll = getByTestId('image-scroll-0');
  
      fireEvent.scroll(imageScroll, {
        nativeEvent: {
          contentOffset: { x: Dimensions.get('window').width },
        },
      });
  
      // Verify if currentIndex is updated correctly (based on implementation)
      // You can add a specific testID in the component if you render the current index
      // and use something like: 
      expect(getByTestId('currentIndex-0')).toHaveTextContent('1');
    });
  
    it('toggles the favorite state when clicking the button', () => {
      const { getByTestId, getByText } = render(<Stay stays={stays} />);
      const favoriteButton = getByTestId('favorite-button-0');
      
      fireEvent.press(favoriteButton);
  
      // Expect the text to change based on the favorite state
      expect(getByText('Unfavorite')).toBeTruthy();
    });

  it('displays "No stays available" when stays array is empty', () => {
    const emptyStays = [];
    const tree = renderer.create(<Stay stays={emptyStays} />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toContain('No stays available');
  });

  it('renders stays correctly', () => {
    const tree = renderer.create(<Stay />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toContain(stays.country);
  });

  it('renders images correctly', () => {
    const instance = renderer.create(<Stay />);
    const flatList = instance.root.findByType(FlatList);
    expect(flatList.props.data).toEqual(stays.images);
  });

  it('scrolls images correctly', () => {
    const instance = renderer.create(<Stay />);
    const flatList = instance.root.findByType(FlatList);

    act(() => {
      flatList.props.onScroll({
        nativeEvent: {
          contentOffset: { x: Dimensions.get('window').width },
        },
      });
    });

    const currentIndex = instance.root.findByProps({ testID: 'currentIndex' }).props.value;
    expect(currentIndex).toBe(1);
  });

  it('renders stars correctly based on rating', () => {
    const instance = renderer.create(<Stay />);
    const stars = instance.root.findAllByType(Ionicon);
    expect(stars.length).toBeGreaterThan(0);
  });

  it('renders "Favorite" text', () => {
    const instance = renderer.create(<Stay />);
    const favoriteText = instance.root.findByProps({ style: styles.favorite }).children;
    expect(favoriteText).toBe('Favorite');
  });

  it('renders dot indicators correctly', () => {
    const instance = renderer.create(<Stay />);
    const dots = instance.root.findAllByProps({ style: styles.dot });
    expect(dots.length).toBe(stays.images.length);
  });

  it('renders stay details correctly', () => {
    const instance = renderer.create(<Stay />);
    const countryText = instance.root.findByProps({ style: styles.country }).children;
    expect(countryText).toBe(`${stays.city}, ${stays.country}`);
    const distanceText = instance.root.findByProps({ style: styles.distance }).children;
    expect(distanceText).toBe('119 km away');
    const dateText = instance.root.findByProps({ style: styles.date }).children;
    expect(dateText).toBe(`${stays.dates.month}. ${stays.dates.begin} - ${stays.dates.end}`);
    const priceText = instance.root.findByProps({ style: styles.priceText }).children;
    expect(priceText).toBe(`€${stays.price}`);
  });


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

  it('updates currentIndex correctly when scrolling images', () => {
    const { getByTestId } = render(<Stay />);
    const imageScroll = getByTestId('image-scroll-0');

    fireEvent.scroll(imageScroll, {
      nativeEvent: {
        contentOffset: { x: Dimensions.get('window').width },
      },
    });

    // Implement state check based on how you manage state in your component
    Example: expect(state.currentIndex).toBe(1);
  });

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






