import { fail } from "https://deno.land/std/testing/asserts.ts";
import * from "https://deno.land/x/sleep/mod.ts";

Deno.test("doze for 5 seconds", async (): Promise<void> => {

    const startTS = Date.now();
    await doze(2);
    const dur = Date.now() - startTS;
    if (dur < 2000 || dur > 2100){
        fail('could not sleep for the right duration');
    }
});

Deno.test("doze for 500 miliseconds", async (): Promise<void> => {

    const startTS = Date.now();
    await dozeMS(500);
    const dur = Date.now() - startTS;
    if (dur < 500 || dur > 550){
        fail('could not sleep for the right duration');
    }
});
