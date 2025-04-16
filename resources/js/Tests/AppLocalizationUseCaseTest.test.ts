// AppLocalizationUseCase.test.ts

import { ChangeAppLanguageUseCase, GetAppLanguage } from "@/UseCases/AppLocalizatoinUsecase";
import { describe, expect, it } from "vitest";


describe('AppLocalizationUseCase', () => {
    it('should set and get language correctly (en)', () => {
        ChangeAppLanguageUseCase('en');
        expect(GetAppLanguage()).toBe('en');

    });
    it('should set and get language correctly (ar)', () => {
        ChangeAppLanguageUseCase('en');
        expect(GetAppLanguage()).toBe('en');

    });
    it('get default language correctly', () => {

        expect(GetAppLanguage()).toBe('en');

    });
});