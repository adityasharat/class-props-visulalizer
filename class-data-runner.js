const data = [
  {
    "name": "InternalNode",
    "fields": [
      "mBackground",
      "mBorderColors",
      "mBorderPathEffect",
      "mBorderRadius",
      "mCachedMeasuresValid",
      "mComponentsNeedingPreviousRenderData",
      "mDebugComponents",
      "mDiffNode",
      "mDuplicateParentState",
      "mFocusedHandler",
      "mForceViewWrapping",
      "mForeground",
      "mFullImpressionHandler",
      "mImportantForAccessibility",
      "mInvisibleHandler",
      "mIsNestedTreeHolder",
      "mIsPaddingPercent",
      "mLastHeightSpec",
      "mLastMeasuredHeight",
      "mLastMeasuredWidth",
      "mLastWidthSpec",
      "mNestedTree",
      "mNestedTreeBorderWidth",
      "mNestedTreeHolder",
      "mNestedTreePadding",
      "mPendingTreeProps",
      "mPrivateFlags3",
      "mReconciliationState",
      "mResolvedHeight",
      "mResolvedTouchExpansionLeft",
      "mResolvedTouchExpansionRight",
      "mResolvedWidth",
      "mResolvedX",
      "mResolvedY",
      "mStateListAnimator",
      "mStateListAnimatorRes",
      "mTestKey",
      "mTouchExpansion",
      "mTransitionKey",
      "mTransitionKeyType",
      "mTransitions",
      "mUnfocusedHandler",
      "mVisibilityChangedHandler",
      "mVisibleHandler",
      "mVisibleHeightRatio",
      "mVisibleWidthRatio",
      "mWorkingRangeRegistrations",
      {
        "name": "ComponentContext"
      },
      {
        "name": "Component"
      },
      {
        "name": "NodeInfo"
      },
      {
        "name": "YogaNode"
      }
    ]
  },
  {
    "name": "ComponentContext",
    "fields": [
      "mComponentTree",
      "mContext",
      "mDefStyleAttr",
      "mDefStyleRes",
      "mHeightSpec",
      "mKeyHandler",
      "mLogger",
      "mLogTag",
      "mNoStateUpdatesMethod",
      "mResourceCache",
      "mStateHandler",
      "mTreeProps",
      "mWidthSpec",
      {
        "name": "Component"
      }
    ]
  },
  {
    "name": "Component",
    "fields": [
      "mChildCounters",
      "mErrorEventHandler",
      "mGlobalKey",
      "mHasManualKey",
      "mId",
      "mIsLayoutStarted",
      "mIsNestedTreeResolutionExperimentEnabled",
      "mKey",
      "mLayoutCreatedInWillRender",
      "mLayoutVersionGenerator",
      "mManualKeys",
      "mOwnerGlobalKey",
      "mSimpleName",
      "mSplitChildrenLayoutInThreadPool",
      "mThreadIdToLastMeasuredLayout",
      "mWorkingRangeRegistrations",
      {
        "name": "ComponentContext"
      },
      {
        "name": "CommonPropsHolder"
      }
    ]
  },
  {
    "name": "CommonPropsHolder",
    "fields": [
      "mBackground",
      "mDefStyleAttr",
      "mDefStyleRes",
      "mHeightPx",
      "mPositions",
      "mPositionType",
      "mPrivateFlags2",
      "mTestKey",
      "mWidthPx",
      "mWrapInView",
      {
        "name": "NodeInfo"
      },
      {
        "name": "OtherProps"
      }
    ]
  },
  {
    "name": "OtherProps",
    "fields": [
      "mAlignSelf",
      "mAspectRatio",
      "mBorder",
      "mDuplicateParentState",
      "mFlex",
      "mFlexBasisPercent",
      "mFlexBasisPx",
      "mFlexGrow",
      "mFlexShrink",
      "mFocusedHandler",
      "mForeground",
      "mFullImpressionHandler",
      "mHeightPercent",
      "mImportantForAccessibility",
      "mInvisibleHandler",
      "mLayoutDirection",
      "mMarginAutos",
      "mMarginPercents",
      "mMargins",
      "mMaxHeightPercent",
      "mMaxHeightPx",
      "mMaxWidthPercent",
      "mMaxWidthPx",
      "mMinHeightPercent",
      "mMinHeightPx",
      "mMinWidthPercent",
      "mMinWidthPx",
      "mPaddingPercents",
      "mPaddings",
      "mPositionPercents",
      "mPrivateFlags1",
      "mStateListAnimator",
      "mStateListAnimatorRes",
      "mTouchExpansions",
      "mTransitionKey",
      "mTransitionKeyType",
      "mUnfocusedHandler",
      "mVisibilityChangedHandler",
      "mVisibleHandler",
      "mVisibleHeightRatio",
      "mVisibleWidthRatio",
      "mWidthPercent"
    ]
  },
  {
    "name": "NodeInfo",
    "fields": [
      "mAccessibilityRole",
      "mAccessibilityRoleDescription",
      "mAlpha",
      "mClickHandler",
      "mClipChildren",
      "mClipToOutline",
      "mContentDescription",
      "mDispatchPopulateAccessibilityEventHandler",
      "mEnabledState",
      "mFocusChangeHandler",
      "mFocusState",
      "mInterceptTouchHandler",
      "mLongClickHandler",
      "mOnInitializeAccessibilityEventHandler",
      "mOnInitializeAccessibilityNodeInfoHandler",
      "mOnPopulateAccessibilityEventHandler",
      "mOnRequestSendAccessibilityEventHandler",
      "mOutlineProvider",
      "mPerformAccessibilityActionHandler",
      "mPrivateFlags",
      "mRotation",
      "mScale",
      "mSelectedState",
      "mSendAccessibilityEventHandler",
      "mSendAccessibilityEventUncheckedHandler",
      "mShadowElevation",
      "mTouchHandler",
      "mViewTag",
      "mViewTags"
    ]
  },
  {
    "name": "YogaNode",
    "fields": [
      "mBaselineFunction",
      "mBorderBottom",
      "mBorderLeft",
      "mBorderRight",
      "mBorderTop",
      "mChildren",
      "mDoesLegacyStretchFlagAffectsLayout",
      "mEdgeSetFlag",
      "mHasNewLayout",
      "mHasSetPosition",
      "mHeight",
      "mLayoutDirection",
      "mLeft",
      "mMarginBottom",
      "mMarginLeft",
      "mMarginRight",
      "mMarginTop",
      "mMeasureFunction",
      "mNativePointer",
      "mOwner",
      "mPaddingBottom",
      "mPaddingLeft",
      "mPaddingRight",
      "mPaddingTop",
      "mTop",
      "mWidth",
      {
        "name": "InternalNode"
      }
    ]
  }
];

const links = [];
const nodes = [];
const map = {};

let counter = 0;

function process(node, source) {
  let name;
  let type;
  let id;
  if (typeof node === 'string') {
    name = node;
    type = 'property'
  } else {
    name = node.name;
    type = 'class'
  }
  
  if (!map[name]) {
    id = counter;
    nodes.push({
      id,
      name,
      type
    });
    map[name] = id;
    counter++;
  } else {
    id = map[name];
  }

  if (typeof source === 'number') {
    links.push({
      source,
      target: id
    });
  }
  
  return id;
}

data.forEach(c => {
  const id = process(c, null);
  c.fields.forEach(f => process(f, id));
});

const result = {
 nodes,
 links 
};
