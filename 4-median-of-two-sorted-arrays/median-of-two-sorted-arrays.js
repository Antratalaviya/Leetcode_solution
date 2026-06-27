/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let m = nums1?.length;
    let n = nums2?.length;
    let mid = 0;

    if ((m + n) % 2 === 0) {
        mid = Math.floor((m + n) / 2) + 1;
    } else {
        mid = Math.ceil((m + n) / 2);
    }

    let i = 0;
    let j = 0;
    let ele1 = nums1[0];
    let ele2 = nums1[0];

    while (i < m && j < n) {
        if (nums1[i] <= nums2[j]) {
            ele1 = ele2;
            ele2 = nums1[i];
            i++;
        } else {
            ele1 = ele2;
            ele2 = nums2[j];
            j++;
        }
        mid--;

        if (mid <= 0) {
            break;
        }
    }

    while (i < m && mid > 0) {
        ele1 = ele2;
        ele2 = nums1[i];
        i++;
        mid--;

        if (mid <= 0) {
            break;
        }
    }

    while (j < n && mid > 0) {
        ele1 = ele2;
        ele2 = nums2[j];
        j++;
        mid--;

        if (mid <= 0) {
            break;
        }
    }

    if ((m + n) % 2 === 0) {
        return (ele1 + ele2) / 2;
    } else {
        return ele2;
    }

};