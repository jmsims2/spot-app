import React from 'react';
import { render } from '@testing-library/react-native';
import { SpotMarker } from './SpotMarker';

const spotId = '123';
const position = { latitude: 0, longitude: 0 };
const devicePosition = { latitude: 1, longitude: 1 };
const props = { spotId, position, devicePosition };

describe('SpotMarker Tests', () => {
  it('should render', () => {
    expect(render(<SpotMarker {...props} />)).toMatchInlineSnapshot(
      `
      <VRTImage
        canClick={false}
        canCollide={false}
        canDrag={false}
        canFuse={false}
        canHover={false}
        canPinch={false}
        canRotate={false}
        canScroll={false}
        canSwipe={false}
        canTouch={false}
        hasTransformDelegate={false}
        height={1}
        onAnimationFinishViro={[Function]}
        onAnimationStartViro={[Function]}
        onClickViro={[Function]}
        onCollisionViro={[Function]}
        onDragViro={[Function]}
        onErrorViro={[Function]}
        onFuseViro={[Function]}
        onHoverViro={[Function]}
        onLoadEndViro={[Function]}
        onLoadStartViro={[Function]}
        onPinchViro={[Function]}
        onRotateViro={[Function]}
        onScrollViro={[Function]}
        onSwipeViro={[Function]}
        onTouchViro={[Function]}
        position={
          Array [
            -111319.49079327357,
            0,
            111325.14286638486,
          ]
        }
        source={
          Object {
            "testUri": "../../../src/assets/spot_black_dropshadow_gradient.png",
          }
        }
        style={
          Array [
            undefined,
          ]
        }
        width={1}
      />
    `,
    );
  });
});
