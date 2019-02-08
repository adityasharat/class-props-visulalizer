const data = {
  "id": "InternalNode",
  "name": "this",
  "fields": [
    "mBackground",
    "mBorderColors",
    "mBorderPathEffect",
    "mBorderRadius",
    "mCachedMeasuresValid",
    {
      "name": "mComponentContext",
      "id": "ComponentContext",
      "fields": [
        "mComponentScope",
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
        "mWidthSpec"
      ]
    },
    {
      "name": "mComponent",
      "id": "Component",
      "fields": [
        "mChildCounters",
        {
          "name": "CommonPropsHolder",
          "fields": [
            "mBackground",
            "mDefStyleAttr",
            "mDefStyleRes",
            "mHeightPx",
            "mNodeInfo",
            {
              "name": "mOtherProps",
              "fields": ["mAlignSelf",
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
            "mPositions",
            "mPositionType",
            "mPrivateFlags2",
            "mTestKey",
            "mWidthPx",
            "mWrapInView"
          ]
        },
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
        "mComponentContext",
        "mSimpleName",
        "mSplitChildrenLayoutInThreadPool",
        "mThreadIdToLastMeasuredLayout",
        "mWorkingRangeRegistrations",
        "sIdGenerator"
      ]
    },
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
    {
      "name": "NodeInfo",
      "fields": [
        "mBackground",
        "mExpandedTouchBounds",
        "mForeground",
        "mLayoutDirection",
        "mPadding",
        "mStateListAnimator",
        "mStateListAnimatorRes"
      ]
    },
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
      "name": "mYogaNode",
      "id": "YogaNode",
      "fields": [
        "mBaselineFunction",
        "mBorderBottom",
        "mBorderLeft",
        "mBorderRight",
        "mBorderTop",
        "mChildren",
        "this",
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
        "mWidth"
      ]
    }
  ]
}

let common = {};
let sum = 0;
function reconcile(entity) {
  entity.fields.forEach(id => {
    if (id instanceof Object) {
      reconcile(id)
    } else if (common.hasOwnProperty(id)) {
      common[id] = common[id] + 1; 
      sum++;
    } else {
      common[id] = 0;
    }
  });
}

reconcile(data)

Object.keys(common).forEach(id => {
  if (common[id] === 0) {
    delete common[id]
  }
});

console.log(sum, common)