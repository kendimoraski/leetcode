/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // 1. open halfway
        // 2. check if good or bad
        // 2a. if good go right
        // 2b. if bad go left
        // 3. split the remainders in halves
        // 4. go back to step 2
        
        let mid = n / 2
        let left = 1
        let right = n
        while (left <= right) {
          mid = Math.floor((right + left) / 2)
            if (isBadVersion(mid)) {
                if (!isBadVersion(mid - 1)) {
                    return mid
                }
              right = mid - 1
          } else {
              left = mid + 1
          }
        }
        return mid
    };
};