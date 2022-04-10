/**
 * @param {string[]} emails
 * @return {number}
 */
 var numUniqueEmails = function(emails) {
    const set = new Set();
    emails.forEach((email) => {
        let [local, domain] = email.split('@');
        local = local.replace(/\./g, '');
        local = local.indexOf('+') === -1 ? local : local.slice(0,local.indexOf('+'));
        set.add(local + '@' + domain);
    });
    return set.size;
};

// URL: https://leetcode.com/problems/unique-email-addresses/

// Runtime: 110 ms, faster than 51.63% of JavaScript online submissions for Unique Email Addresses.
// Memory Usage: 47 MB, less than 51.89% of JavaScript online submissions for Unique Email Addresses.

// another answer
/**
 * @param {string[]} emails
 * @return {number}
 */
 var numUniqueEmails = function(emails) {
    const getDomain = email => email.match(/@.+/)[0];
    const getLocalName = email => email.replace(/@.+/, '');
    const getCleanedLocalName = email => getLocalName(email).replace(/(\.|(\+[\w\.]{0,}))/g, '');
    
    const uniqueRecipients = new Set([]);
    for (const email of emails) {
      const domain = getDomain(email);
      const cleanedLocalName = getCleanedLocalName(email);
      
      uniqueRecipients.add(`${cleanedLocalName}${domain}`);
    }
    
    return uniqueRecipients.size;
  };

// Runtime: 80 ms, faster than 87.80% of JavaScript online submissions for Unique Email Addresses.
// Memory Usage: 46.8 MB, less than 58.25% of JavaScript online submissions for Unique Email Addresses.