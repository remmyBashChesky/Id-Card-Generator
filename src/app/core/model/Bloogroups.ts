export enum BloodGroup {
    A,
    AB,
    O,
    B
}
export function getBloodGroup(bloodGroup: BloodGroup): string {
    switch (bloodGroup) {
        case BloodGroup.A:
            return 'Group A';
        case BloodGroup.AB:
            return 'Group AB';
        case BloodGroup.B:
            return 'Group B';
        case BloodGroup.O:
            return 'Group O';
    }
}
export const helpers={
    bloodGroupHelpers: getBloodGroup
}