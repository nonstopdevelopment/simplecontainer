const scriptName = process.env.SCRIPT_NAME || 'DefaultTestScript';
const customParam = process.env.SCRIPT_PARAM_MESSAGE || 'No custom message provided.';

console.log(`--- Running ${scriptName} ---`);
console.log(`Timestamp: ${new Date().toISOString()}`);
console.log(`Custom Message: ${customParam}`);

// Simulate some work
for (let i = 0; i < 3; i++) {
    console.log(`Working... step ${i + 1}`);
    // In a real script, you might have await new Promise(resolve => setTimeout(resolve, 1000));
}

console.log(`--- ${scriptName} Finished Successfully ---`);
process.exit(0); // Explicitly exit with success code
